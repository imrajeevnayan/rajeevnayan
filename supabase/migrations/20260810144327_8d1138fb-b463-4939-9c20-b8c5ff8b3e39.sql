-- Enable the pgvector extension
create extension if not exists vector;

-- Knowledge Base table for RAG
create table if not exists public.portfolio_knowledge (
    id uuid primary key default gen_random_uuid(),
    content text not null unique,
    metadata jsonb default '{}'::jsonb,
    embedding vector(1536),
    created_at timestamptz default now() not null,
    updated_at timestamptz default now() not null
);

-- Grant access
grant select on public.portfolio_knowledge to authenticated;
grant select on public.portfolio_knowledge to anon;
grant all on public.portfolio_knowledge to service_role;

-- Enable RLS
alter table public.portfolio_knowledge enable row level security;

-- Policies
drop policy if exists "Public can read knowledge" on public.portfolio_knowledge;
create policy "Public can read knowledge"
on public.portfolio_knowledge
for select
to anon
using (true);

-- Function for similarity search
create or replace function match_portfolio_knowledge (
  query_embedding vector(1536),
  match_threshold float,
  match_count int
)
returns table (
  id uuid,
  content text,
  metadata jsonb,
  similarity float
)
language sql stable
as $$
  select
    portfolio_knowledge.id,
    portfolio_knowledge.content,
    portfolio_knowledge.metadata,
    1 - (portfolio_knowledge.embedding <=> query_embedding) as similarity
  from portfolio_knowledge
  where 1 - (portfolio_knowledge.embedding <=> query_embedding) > match_threshold
  order by similarity desc
  limit match_count;
$$;