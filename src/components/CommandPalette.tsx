import { useEffect } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { profile } from "@/data/portfolio";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "stack", label: "Tech Stack" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "coding", label: "Coding & Problem Solving" },
  { id: "github", label: "GitHub Dashboard" },
  { id: "expertise", label: "Backend Expertise" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const links = [
  { label: "Open GitHub", href: profile.links.github },
  { label: "Open LinkedIn", href: profile.links.linkedin },
  { label: "Open LeetCode", href: "https://leetcode.com/u/imrajeevnayan/" },
  { label: "Open GeeksforGeeks", href: "https://www.geeksforgeeks.org/profile/imrajeevnayan?tab=activity" },
  { label: "Open Codolio", href: "https://codolio.com/profile/imrajeevnayan" },
  { label: "Send an email", href: `mailto:${profile.email}` },
];

export function CommandPalette({
  open,
  onOpenChange,
  onOpenTerminal,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onOpenTerminal?: () => void;
}) {
  const setOpen = (next: boolean | ((o: boolean) => boolean)) =>
    onOpenChange(typeof next === "function" ? next(open) : next);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open command palette"
        className="glass fixed right-5 bottom-5 z-50 rounded-full px-4 py-2.5 font-mono text-[11px] text-muted-foreground transition-colors hover:text-foreground lg:block active:scale-95"
      >
        <span className="hidden lg:inline">⌘K — jump to section</span>
        <span className="lg:hidden">Commands</span>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search sections and links…" />
        <CommandList>
          <CommandEmpty>No results.</CommandEmpty>
          <CommandGroup heading="Sections">
            {sections.map((s) => (
              <CommandItem
                key={s.id}
                onSelect={() => {
                  setOpen(false);
                  document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {s.label}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Tools">
            <CommandItem
              onSelect={() => {
                setOpen(false);
                onOpenTerminal?.();
              }}
            >
              Open Terminal
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Links">
            {links.map((l) => (
              <CommandItem
                key={l.label}
                onSelect={() => {
                  setOpen(false);
                  window.open(l.href, "_blank", "noopener,noreferrer");
                }}
              >
                {l.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
