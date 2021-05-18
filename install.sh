cp .env.example .env;

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
  react-ssr-prepass@npm:preact-ssr-prepass;

yarn add --dev\
  @graphql-codegen/typescript\
  @graphql-codegen/cli\
  @graphql-codegen/typescript-operations\
  @prefresh/next\
  @types/node\
  @types/react\
  @types/react-dom\
  @typescript-eslint/eslint-plugin\
  @typescript-eslint/parser\
  autoprefixer\
  critters\
  eslint\
  eslint-config-universe\
  postcss\
  prettier\
  react-refresh\
  tailwindcss\
  typescript;

rm install.sh;
