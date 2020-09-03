# Next Starter

This is a quick-start boilerplate for Next.js projects. It sets up Next.js, TypeScript, TypeScript Codegen, Preact, Sentry, Ether UI, Tailwind CSS (with PurgeCSS), GraphQL, ESLint, Prettier and commit-time asset optimisations.

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

# Default Next readme

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
