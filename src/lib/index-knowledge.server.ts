import { createClient } from '@supabase/supabase-js';
import { profile, featuredProjects, techStack, experience } from "../data/portfolio";

// This script is meant to be run server-side or via a management task
// It indexes the portfolio data into the Supabase vector store

const supabase = createClient(
  process.env['VITE_SUPABASE_URL']!,
  process.env['SUPABASE_SERVICE_ROLE_KEY']!
);

async function generateEmbedding(text: string) {
  // In a real environment, this would call OpenAI or a similar service
  // Placeholder vector for structure demonstration
  return new Array(1536).fill(0).map(() => Math.random());
}

async function indexKnowledge() {
  const documents: { content: string; metadata: any }[] = [];

  // Profile
  documents.push({
    content: `Rajeev Nayan is a ${profile.role} based in ${profile.location}. ${profile.summary}`,
    metadata: { source: "about", section: "profile" }
  });

  // Tech Stack
  techStack.forEach(group => {
    documents.push({
      content: `Rajeev is proficient in ${group.group} technologies: ${group.items.join(", ")}.`,
      metadata: { source: "skills", section: group.group }
    });
  });

  // Experience
  experience.forEach(exp => {
    documents.push({
      content: `Experience at ${exp.company} as ${exp.role} (${exp.period}): ${exp.desc}. Key achievements: ${exp.points.join(". ")}`,
      metadata: { source: "experience", company: exp.company }
    });
  });

  // Projects
  featuredProjects.forEach(p => {
    documents.push({
      content: `Project "${p.title}": ${p.description}. Stack: ${p.stack.join(", ")}. Architecture: ${p.architecture}. Features: ${p.features.join(". ")}`,
      metadata: { source: "projects", title: p.title }
    });
  });

  console.log(`[RAG Indexer] Preparing to index ${documents.length} documents...`);

  for (const doc of documents) {
    const embedding = await generateEmbedding(doc.content);
    const { error } = await supabase
      .from('portfolio_knowledge')
      .upsert({
        content: doc.content,
        metadata: doc.metadata,
        embedding
      }, { onConflict: 'content' });

    if (error) console.error("[RAG Indexer] Error indexing doc:", error);
  }

  console.log("[RAG Indexer] Indexing process completed.");
}

// Check if run directly
if (process.env['NODE_ENV'] !== 'production') {
  indexKnowledge().catch(console.error);
}

export { indexKnowledge };
