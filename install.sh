cp .env.example .env;

brew install\
  jpegoptim\
  optipng\
  svgo;

yarn add\
  dayjs\
  graphql\
  graphql-request\
  next\
  next-plugin-preact\
  preact\
  preact-render-to-string\
  react@npm:@preact/compat\
  react-dom@npm:@preact/compat\
  react-map-gl\
  react-ssr-prepass@npm:preact-ssr-prepass;

yarn add --dev\
  @graphql-codegen/typescript\
  @graphql-codegen/cli\
  @graphql-codegen/typescript-operations\
  @prefresh/next\
  @types/express\
  @types/node\
  @types/react\
  @types/react-dom\
  @types/react-map-gl\
  @typescript-eslint/eslint-plugin\
  @typescript-eslint/parser\
  eslint\
  eslint-config-universe\
  husky\
  imagemin\
  imagemin-jpegoptim\
  imagemin-optipng\
  imagemin-svgo\
  lint-staged\
  postcss-preset-env\
  prettier\
  react-refresh\
  tailwindcss@1.9.6\
  typescript;

rm install.sh;
