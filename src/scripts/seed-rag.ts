import { createClient } from '@supabase/supabase-js';
import { profile, featuredProjects, techStack, experience } from "../data/portfolio";

const supabase = createClient(
  process.env['VITE_SUPABASE_URL']!,
  process.env['SUPABASE_SERVICE_ROLE_KEY']!
);

async function generateEmbedding(text: string) {
  const t = text.toLowerCase();
  return new Array(1536).fill(0).map((_, i) => {
    let hash = 0;
    for (let j = 0; j < t.length; j++) {
      hash = ((hash << 5) - hash) + t.charCodeAt(j);
      hash |= 0;
    }
    return Math.abs(Math.sin(hash + i));
  });
}

async function indexKnowledge() {
  const documents: { content: string; metadata: any }[] = [];

  documents.push({
    content: `Rajeev Nayan is a ${profile.role} based in ${profile.location}. ${profile.summary}`,
    metadata: { source: "about", section: "profile" }
  });

  techStack.forEach((group: any) => {
    documents.push({
      content: `Rajeev is proficient in ${group.group} technologies: ${group.items.join(", ")}.`,
      metadata: { source: "skills", section: group.group }
    });
  });

  experience.forEach((exp: any) => {
    documents.push({
      content: `Experience at ${exp.company} as ${exp.role} (${exp.period}): ${exp.desc}. Key achievements: ${exp.points.join(". ")}`,
      metadata: { source: "experience", company: exp.company }
    });
  });

  featuredProjects.forEach((p: any) => {
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

indexKnowledge().catch(console.error);
