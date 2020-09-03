# Next Starter

This is a quick-start boilerplate for Next.js projects. It sets up Next.js, TypeScript, TypeScript Codegen, Preact, Sentry, Ether UI, Tailwind CSS, GraphQL, ESLint, Prettier and commit-time asset optimisations.

Recommended deployment is [Vercel](https://vercel.app).

## Getting Started

Clone the repo, then run:

`chmod +x install.sh && ./install.sh`

Edit `GRAPH_URL`, `GRAPH_TOKEN` and `SENTRY_DSN` in `.env`.

Run `yarn dev` and visit `http://localhost:3000` to start developing!

## Ether UI

See [Ether UI](https://github.com/ethercreative/ui) for more information.

## TypeScript types

Once you've hooked up your GraphQL endpoint, run `yarn types` to automatically generate the types from your schema.

## Static exports

See `_example.tsx` for [ISR SSG](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation).

## Why Preact?

Using Preact drops the `gzipped` bundle size by about 45kB!

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
