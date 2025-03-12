import type { CodegenConfig } from '@graphql-codegen/cli';
import { loadEnvConfig } from '@next/env';

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  schema: [
    {
      'https://api.github.com/graphql': {
        headers: {
          'Authorization': `bearer ${process.env.NEXT_PUBLIC_GITHUB_PAT}`,
          'User-Agent': 'Vernando05',
        },
      },
    },
  ],
  documents: ['src/**/*.tsx'],
  ignoreNoDocuments: true,
  generates: {
    './src/graphql/': {
      preset: 'client',
      config: {
        documentMode: 'string',
      },
    },
    './schema.graphql': {
      plugins: ['schema-ast'],
      config: {
        includeDirectives: true,
      },
    },
  },
};

export default config;
