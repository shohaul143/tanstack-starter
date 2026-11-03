import { Link, Outlet } from "@tanstack/react-router";
import { Mail, Moon, Sun } from "lucide-react";
import type { ComponentProps, MouseEvent } from "react";

import { Container } from "#/components/container";
import { Button, buttonVariants } from "#/components/ui/button";

const githubUrl = "https://github.com/shohaul143";
const emailAddress = "shohaul143@outlook.com";

export function SiteLayout() {
  return (
    <div className="flex min-h-svh flex-col">
      <header className="border-b">
        <Container>
          <nav aria-label="Main" className="flex h-16 items-center justify-between">
            <Link
              to="/"
              aria-label="TanStack Starter home"
              className="font-signature text-4xl leading-none"
            >
              ts
            </Link>
            <ThemeToggle />
          </nav>
        </Container>
      </header>

      <main className="flex-1">
        <Container className="py-16">
          <Outlet />
        </Container>
      </main>

      <SiteFooter />
    </div>
  );
}

function applyTheme(isDark: boolean) {
  const root = document.documentElement;
  root.classList.toggle("dark", isDark);
  root.style.colorScheme = isDark ? "dark" : "light";

  try {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  } catch {
    // Storage can be blocked; the theme still changes for this page view.
  }
}

function toggleTheme(event: MouseEvent<HTMLButtonElement>) {
  const isDark = !document.documentElement.classList.contains("dark");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!document.startViewTransition || reduceMotion) {
    applyTheme(isDark);
    return;
  }

  // Keyboard activation reports 0,0; start the reveal from the button instead.
  const rect = event.currentTarget.getBoundingClientRect();
  const x = event.detail === 0 ? rect.left + rect.width / 2 : event.clientX;
  const y = event.detail === 0 ? rect.top + rect.height / 2 : event.clientY;
  const radius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y),
  );

  const transition = document.startViewTransition(() => applyTheme(isDark));

  void transition.ready.then(() => {
    document.documentElement.animate(
      {
        clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`],
      },
      {
        duration: 500,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  });
}

function ThemeToggle() {
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="relative"
      aria-label="Toggle color theme"
      title="Toggle color theme"
      onClick={toggleTheme}
    >
      <Sun
        aria-hidden="true"
        className="size-4 rotate-0 scale-100 transition-transform duration-300 dark:-rotate-90 dark:scale-0"
      />
      <Moon
        aria-hidden="true"
        className="absolute size-4 rotate-90 scale-0 transition-transform duration-300 dark:rotate-0 dark:scale-100"
      />
    </Button>
  );
}

function SiteFooter() {
  const now = new Date();
  const lastUpdated = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(now);

  return (
    <footer className="border-t">
      <Container className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">© {now.getFullYear()} Shohaul</p>
          <p className="text-xs text-muted-foreground">
            Last updated <time dateTime={now.toISOString().slice(0, 10)}>{lastUpdated}</time>
          </p>
        </div>

        <nav aria-label="Social links" className="flex items-center gap-1">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className={buttonVariants({ variant: "ghost", size: "icon" })}
          >
            <GitHubIcon className="size-4" />
          </a>
          <a
            href={`mailto:${emailAddress}`}
            aria-label="Email"
            className={buttonVariants({ variant: "ghost", size: "icon" })}
          >
            <Mail className="size-4" aria-hidden="true" />
          </a>
        </nav>
      </Container>
    </footer>
  );
}

function GitHubIcon(props: ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.17-.01-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}
