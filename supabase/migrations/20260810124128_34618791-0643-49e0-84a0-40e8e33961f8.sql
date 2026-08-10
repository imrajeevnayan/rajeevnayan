
-- 1. Create the contact_submissions table
CREATE TABLE public.contact_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'pending' NOT NULL, -- pending, processed, archived
    is_spam BOOLEAN DEFAULT false NOT NULL
);

-- 2. Grant permissions
GRANT INSERT ON public.contact_submissions TO anon;
GRANT SELECT, UPDATE, DELETE ON public.contact_submissions TO authenticated;
GRANT ALL ON public.contact_submissions TO service_role;

-- 3. Enable RLS
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- 4. Create Policies
-- Allow anyone (public/anon) to submit a contact form
CREATE POLICY "Anyone can submit contact form" 
ON public.contact_submissions 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- Allow authenticated users to view/manage submissions
CREATE POLICY "Admins can view submissions" 
ON public.contact_submissions 
FOR SELECT 
TO authenticated 
USING (true);
