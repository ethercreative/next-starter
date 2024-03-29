# Next Starter

This is a quick-start boilerplate for Next.js projects.

It sets up Next.js, TypeScript, TypeScript Codegen, Tailwind CSS (with PurgeCSS and critical CSS), GraphQL, ESLint and Prettier.

Back-end is assumed to be Craft CMS (with live preview support!). The only files this matters for is `pages/_example.tsx` and `pages/api/preview.ts`, which can be deleted/ignored if using another system.

Recommended deployment is [Vercel](https://vercel.app).

## Getting Started

Clone the repo, then run:

`chmod +x install.sh && ./install.sh`

Edit `GRAPH_URL` and `GRAPH_TOKEN` in `.env`.

Run `yarn dev` and visit `http://localhost:3000` to start developing!

## Import aliases

To use import aliases (e.g. `import { Button } from 'components'`), add the following to the `compilerOptions` object once your `tsconfig.json` file has been generated (the first time you run `yarn dev`):

```json
"baseUrl": "."
```

## TypeScript types

Once you've hooked up your GraphQL endpoint, run `yarn types` to automatically generate the types from your schema.

## Static exports

See `pages/_example.tsx` for [ISR SSG](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation).

## Live Previewing

In order for Craft's live preview function to work, you must use `/api/preview?entryUid={sourceUid}` as the preview target in the section settings.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
