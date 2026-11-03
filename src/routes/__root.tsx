import { HeadContent, ScriptOnce, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

import { SiteLayout } from "#/components/site-layout";
import appCss from "../styles/app.css?url";
import shadcnCss from "../styles/shadcn.css?url";

const themeScript = `(() => {
  let theme = "dark";
  try {
    if (localStorage.getItem("theme") === "light") theme = "light";
  } catch {}
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
})();`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      // Default is dark, so the browser's pre-CSS canvas is dark too.
      {
        name: "color-scheme",
        content: "dark",
      },
      {
        title: "TanStack Starter",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "stylesheet",
        href: shadcnCss,
      },
    ],
  }),
  component: SiteLayout,
  shellComponent: RootDocument,
});

// The inline theme script sets `.dark` before hydration, so the root element
// intentionally differs from the server markup. This only covers <html>
// attributes; hydration mismatches elsewhere still warn normally.
function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <ScriptOnce>{themeScript}</ScriptOnce>
        {children}
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
