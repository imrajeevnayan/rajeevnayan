import { profile } from "@/data/portfolio";
import { SystemStatusTicker } from "./SystemStatusTicker";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="section-shell flex flex-col items-center gap-8">
        <SystemStatusTicker />
        
        <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} {profile.name} · {profile.role}
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 font-mono text-xs text-muted-foreground">
            <a href={profile.links.github} target="_blank" rel="noreferrer noopener" className="hover:text-foreground" aria-label="GitHub Profile">
              GitHub
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer noopener" className="hover:text-foreground" aria-label="LinkedIn Profile">
              LinkedIn
            </a>
            <a href={profile.links.leetcode} target="_blank" rel="noreferrer noopener" className="hover:text-foreground" aria-label="LeetCode Profile">
              LeetCode
            </a>
            <a href={profile.links.twitter} target="_blank" rel="noreferrer noopener" className="hover:text-foreground" aria-label="Twitter Profile">
              Twitter
            </a>
            <a href={profile.links.instagram} target="_blank" rel="noreferrer noopener" className="hover:text-foreground" aria-label="Instagram Profile">
              Instagram
            </a>
            <a href={`mailto:${profile.email}`} className="hover:text-foreground" aria-label="Send Email">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
