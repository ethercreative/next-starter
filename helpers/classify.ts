export const classify = (classes: (string | undefined)[]) =>
  classes
    .filter(Boolean)
    .map((c) => c.trim())
    .join(' ');
