export const formatStaticPaths = (entries: EntryInterface[]) => ({
  paths: entries.map(({ slug }) => ({ params: { slug } })),
  fallback: true,
});
