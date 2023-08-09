// export const formatStaticPaths = (entries: EntryInterface[]) => ({
export const formatStaticPaths = (entries: any[]) => ({
  paths: entries.map(({ slug }) => ({ params: { slug } })),
  fallback: 'blocking',
});
