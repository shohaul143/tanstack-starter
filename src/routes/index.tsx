import { createFileRoute } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Atom,
  Blocks,
  Braces,
  ClipboardPen,
  Cloud,
  Database,
  Layers,
  RouteIcon,
  ShieldCheck,
  Wind,
} from "lucide-react";

import { githubUrl } from "#/components/site-layout";
import { buttonVariants } from "#/components/ui/button";
import { cn } from "#/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

type Tool = {
  name: string;
  description: string;
  category: string;
  href: string;
  icon: LucideIcon;
};

const tools: Array<Tool> = [
  {
    name: "TanStack Start",
    description: "SSR & server functions",
    category: "Framework",
    href: "https://tanstack.com/start",
    icon: Layers,
  },
  {
    name: "TanStack Router",
    description: "Type-safe routing & loaders",
    category: "Routing",
    href: "https://tanstack.com/router",
    icon: RouteIcon,
  },
  {
    name: "TanStack Query",
    description: "Async state & caching",
    category: "Data",
    href: "https://tanstack.com/query",
    icon: Database,
  },
  {
    name: "TanStack Form",
    description: "Headless form validation",
    category: "Forms",
    href: "https://tanstack.com/form",
    icon: ClipboardPen,
  },
  {
    name: "React 19",
    description: "UI runtime & compiler",
    category: "UI",
    href: "https://react.dev",
    icon: Atom,
  },
  {
    name: "TypeScript",
    description: "Strict types end-to-end",
    category: "Language",
    href: "https://www.typescriptlang.org",
    icon: Braces,
  },
  {
    name: "Tailwind CSS 4",
    description: "Utility styling & tokens",
    category: "Styling",
    href: "https://tailwindcss.com",
    icon: Wind,
  },
  {
    name: "shadcn/ui",
    description: "Base UI primitives",
    category: "Components",
    href: "https://ui.shadcn.com",
    icon: Blocks,
  },
  {
    name: "Zod",
    description: "Schema validation",
    category: "Validation",
    href: "https://zod.dev",
    icon: ShieldCheck,
  },
  {
    name: "Cloudflare Workers",
    description: "Edge deploy runtime",
    category: "Deploy",
    href: "https://workers.cloudflare.com",
    icon: Cloud,
  },
];

function Home() {
  return (
    <>
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">TanStack Starter</h1>
        <p className="mt-3 text-muted-foreground">
          A working base for React apps built with React 19, TanStack Start and Router, TypeScript,
          Tailwind CSS 4, and shadcn/ui. Deploys to Cloudflare Workers.
        </p>
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className={cn(buttonVariants({ variant: "outline", size: "default" }), "mt-5")}
        >
          View source
          <ArrowUpRight aria-hidden="true" />
        </a>
      </div>

      <section aria-labelledby="stack-heading" className="mt-10">
        <div className="flex items-baseline justify-between gap-4 border-b pb-3">
          <h2 id="stack-heading" className="text-sm font-medium">
            Built with
          </h2>
          <p className="text-xs text-muted-foreground">Core dependencies</p>
        </div>

        <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {tools.map((tool) => (
            <li key={tool.name}>
              <ToolCard tool={tool} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

function ToolCard({ tool }: { tool: Tool }) {
  const Icon = tool.icon;

  return (
    <a
      href={tool.href}
      target="_blank"
      rel="noreferrer"
      className="group flex h-full min-h-[120px] flex-col justify-between border bg-card p-3.5 transition-colors hover:border-foreground/20 hover:bg-muted/30 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
    >
      <div className="flex items-start justify-between gap-2">
        <span className="flex size-7 items-center justify-center border text-muted-foreground transition-colors group-hover:text-foreground">
          <Icon aria-hidden="true" className="size-3.5" />
        </span>
        <span className="flex items-center gap-1 text-[10px] tracking-wider text-muted-foreground uppercase">
          {tool.category}
          <ArrowUpRight
            aria-hidden="true"
            className="size-3 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
          />
        </span>
      </div>

      <div className="mt-3">
        <div className="text-sm font-medium leading-snug">{tool.name}</div>
        <div className="mt-1 text-xs leading-snug text-muted-foreground">{tool.description}</div>
      </div>
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}
