# TanStack Starter

Opinionated starter for [TanStack Start](https://tanstack.com/start) with preconfigured tooling and UI components.

## What's Included

- **TanStack**: Start, Router, Form, Query, Devtools
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

## Resources

- [TanStack Start](https://tanstack.com/start)
- [TanStack Router](https://tanstack.com/router)
- [Tailwind CSS](https://tailwindcss.com)
- [Cloudflare Workers](https://developers.cloudflare.com/workers)

---

## Matt Pocock Skills

This repo uses Matt Pocock's engineering skills for issue tracking, triage, and domain docs. The setup tells agents where issues live, what triage labels mean, and where domain terms are documented.

Configuration added in commit e1af162:

- Issue tracker: GitHub issues via `gh`
- Triage labels: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`
- Domain docs: `GLOSSARY.md` at repo root, ADRs in `docs/adr/`

Config lives in `AGENTS.md` and `docs/agents/`. Skills like `triage`, `to-tickets`, and `to-spec` read these files.

To opt out later:

```bash
rm -rf docs/agents/
gh label delete needs-triage needs-info ready-for-agent ready-for-human wontfix
```

Then remove the `## Agent skills` section from `AGENTS.md`. Delete `GLOSSARY.md` and `docs/adr/` if unused.
