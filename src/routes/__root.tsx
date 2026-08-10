import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { usePostHog } from "@/hooks/use-posthog";
import { AccessibilityProvider } from "@/hooks/use-accessibility";
import { AccessibilityPanel } from "@/components/AccessibilityPanel";

import { Toaster } from "@/components/ui/sonner";
import { SpeedInsights } from "@vercel/speed-insights/react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Rajeev Nayan | Java Backend Engineer & System Architect" },
      {
        name: "description",
        content:
          "Portfolio of Rajeev Nayan, a Java Backend Developer specializing in Spring Boot microservices, high-performance REST APIs, and AI-powered RAG systems. Explore production-grade engineering, distributed systems, and real-world project case studies.",
      },
      { name: "author", content: "Rajeev Nayan" },
      { name: "google-site-verification", content: "VITE_GOOGLE_VERIFICATION_TOKEN" },
      { property: "og:title", content: "Rajeev Nayan | Java Backend Engineer & System Architect" },
      {
        property: "og:description",
        content:
          "Senior software engineering portfolio of Rajeev Nayan. Expertise in Java 21, Spring Boot 3, Microservices, Distributed Systems, and AI/RAG architectures.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://rajeevnayan.in" },
      { property: "og:image", content: "https://avatars.githubusercontent.com/u/95278277?v=4" },
      { property: "og:site_name", content: "Rajeev Nayan Portfolio" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@imrajeevnayan" },
      { name: "twitter:creator", content: "@imrajeevnayan" },
      { name: "twitter:title", content: "Rajeev Nayan | Java Backend Engineer & System Architect" },
      { name: "twitter:description", content: "Senior Java Backend Developer specializing in Spring Boot 3, Microservices, and AI/RAG systems." },
      { name: "twitter:image", content: "https://avatars.githubusercontent.com/u/95278277?v=4" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "preload",
        as: "style",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap&font-display=swap",
      },
      { rel: "canonical", href: "https://rajeevnayan.in" },
      { rel: "alternate", href: "https://rajeevnayan.in", hreflang: "en" },
      { rel: "alternate", href: "https://rajeevnayan.in/hi", hreflang: "hi" },
      { rel: "alternate", href: "https://rajeevnayan.in/de", hreflang: "de" },
      { rel: "alternate", href: "https://rajeevnayan.in", hreflang: "x-default" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  usePostHog();

  return (
    <QueryClientProvider client={queryClient}>
      <AccessibilityProvider>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
        <Toaster />
        <AccessibilityPanel />
        <SpeedInsights />
      </AccessibilityProvider>
    </QueryClientProvider>
  );
}
