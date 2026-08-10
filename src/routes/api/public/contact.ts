import { createFileRoute } from '@tanstack/react-router'
import { createClient } from '@supabase/supabase-js'

// Simple keyword-based spam protection helper
function isLikelySpam(text: string): boolean {
  const spamKeywords = [
    'viagra', 'casino', 'lottery', 'crypto profit', 
    'cheap drugs', 'buy followers', 'work from home'
  ];
  const content = text.toLowerCase();
  return spamKeywords.some(keyword => content.includes(keyword));
}

export const Route = createFileRoute('/api/public/contact')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const { name, email, subject, message } = body;

          if (!name || !email || !message) {
            return new Response(JSON.stringify({ error: 'Missing required fields' }), { 
              status: 400,
              headers: { 'Content-Type': 'application/json' }
            });
          }

          // Basic spam check
          const spamDetected = isLikelySpam(message) || isLikelySpam(subject || '');

          // Create Supabase client using environment variables
          const supabase = createClient(
            import.meta.env['VITE_SUPABASE_URL']!,
            import.meta.env['SUPABASE_SERVICE_ROLE_KEY'] || import.meta.env['VITE_SUPABASE_PUBLISHABLE_KEY']!,
            {
              auth: {
                autoRefreshToken: false,
                persistSession: false
              }
            }
          );

          // Store in database
          const { data, error } = await supabase
            .from('contact_submissions')
            .insert([
              { name, email, subject, message, is_spam: spamDetected }
            ])
            .select()
            .single();

          if (error) {
            console.error('Database error:', error);
            throw error;
          }

          // Note: In a real production app with Lovable email tools, we'd trigger an email here.
          // For now, we return success.
          return new Response(JSON.stringify({ 
            success: true, 
            id: data.id,
            message: spamDetected ? 'Submission received (pending review)' : 'Message sent successfully'
          }), {
            headers: { 'Content-Type': 'application/json' }
          });

        } catch (error: any) {
          console.error('Contact form error:', error);
          return new Response(JSON.stringify({ error: 'Internal server error' }), { 
            status: 500,
            headers: { 'Content-Type': 'application/json' }
          });
        }
      }
    }
  }
})
