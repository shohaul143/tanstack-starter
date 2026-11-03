import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { githubUrl } from "#/components/site-layout";
import { buttonVariants } from "#/components/ui/button";
import { cn } from "#/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">TanStack Starter</h1>
      <p className="mt-4 text-muted-foreground">
        A working base for React apps built with React 19, TanStack Start and Router, TypeScript,
        Tailwind CSS 4, and shadcn/ui. Deploys to Cloudflare Workers.
      </p>
      <a
        href={githubUrl}
        target="_blank"
        rel="noreferrer"
        className={cn(buttonVariants({ variant: "outline", size: "lg" }), "mt-8")}
      >
        View source
        <ArrowUpRight aria-hidden="true" />
      </a>
    </div>
  );
}
