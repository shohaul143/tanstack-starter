# TanStack Starter

Opinionated starter for [TanStack Start](https://tanstack.com/start) with preconfigured tooling and UI components.

## What's Included

- **TanStack**: Start, Router, Form, Query, Devtools (disabled by default, see [Devtools](#devtools))
- **UI**: Tailwind CSS 4, Base UI, shadcn, Lucide icons
- **Tooling**: Vite+, TypeScript, React Compiler
- **Deployment**: Cloudflare Workers (configured)

## Getting Started

```bash
vp install
vp dev
```

Build for production:

```bash
vp build
```

## Deployment

Configured for Cloudflare Workers via `wrangler.jsonc`:

```bash
wrangler login
pnpm run deploy
```

Set secrets: `wrangler secret put MY_VAR` for each in `.env.example`. Public vars go in `wrangler.jsonc` under `vars`.

## File-Based Routing

Routes live in `src/routes/`. TanStack Router auto-generates types. See [TanStack Router docs](https://tanstack.com/router) for routing, loaders, and server functions.

## Devtools

TanStack Devtools is disabled so the app has no floating devtools button. The packages and the `devtools()` Vite plugin (`vite.config.ts`) are still installed and configured, so enabling it is a single component.

Add this to the `RootDocument` body in `src/routes/__root.tsx`, right after `{children}`:

```tsx
import { TanStackDevtools } from "@tanstack/react-devtools";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

// ...inside <body>
<TanStackDevtools
  config={{ position: "bottom-right" }}
  plugins={[{ name: "TanStack Router", render: <TanStackRouterDevtoolsPanel /> }]}
/>;
```

Set `hideUntilHover: true` in `config` if you want the trigger to stay hidden until you hover its corner. If you'd rather not ship the devtools code at all, also remove the `devtools()` plugin from `vite.config.ts` and uninstall `@tanstack/react-devtools` and `@tanstack/react-router-devtools`.

## Resources

- [TanStack Start](https://tanstack.com/start)
- [TanStack Router](https://tanstack.com/router)
- [Tailwind CSS](https://tailwindcss.com)
- [Cloudflare Workers](https://developers.cloudflare.com/workers)
