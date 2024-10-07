import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'demo-components',
  plugins: [
    sass({
      injectGlobalPaths: [],
    }),
  ],
  commonjs: {
    namedExports: {
      '@bjesuiter/serializr-helpers/dist.commonjs.es6': ['deserializeFromPojo'],
    },
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
