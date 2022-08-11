import {build} from 'esbuild';
import fs from 'fs-extra';

(async () => {
  const niceCopy = (targetEntryList) => {
    return Promise.all(
      targetEntryList.map(async (entryInfo) => {
        await fs.copy(entryInfo.src, entryInfo.dest);
      })
    );
  };

  // https://github.com/evanw/esbuild/issues/21
  // https://github.com/watchexec/watchexec/releases
  const niceBuild = () => {
    return build({
      entryPoints: ['src/index.js'],
      outfile: 'dist/www/index.js',
      bundle: true,
      minify: true,
      sourcemap: true,
    });
  };

  let includeAppEnvInfoPath = 'env-dev.config.js';
  if (process.env.NODE_APP_ENV_MODE === 'production') {
    includeAppEnvInfoPath = 'env-prod.config.js';
  }

  if (process.env.NODE_APP_ENV_MODE === 'development') {
    const devBuildConfig = {
      devBuildEntryInfoList: [],
    };

    const {devBuildEntryInfoList} = {...devBuildConfig};

    await niceCopy(devBuildEntryInfoList);

    await niceBuild();
  }

  if (process.env.NODE_APP_ENV_MODE === 'production') {
    const prodBuildConfig = {
      prodBuildEntryInfoList: [
        {src: 'node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js', dest: 'dist/www/node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js'},
        {src: 'node_modules/lit/polyfill-support.js', dest: 'dist/www/node_modules/lit/polyfill-support.js'},
        {src: 'node_modules/lit/polyfill-support.js.map', dest: 'dist/www/node_modules/lit/polyfill-support.js.map'},
        {src: 'src/pages', dest: 'dist/www/src/pages'},
        {src: 'styles', dest: 'dist/www/styles'},
        {src: 'static/svg', dest: 'dist/www/static/svg'},
        {src: 'static/image', dest: 'dist/www/static/image'},
        {src: 'static/video', dest: 'dist/www/static/video'},
        {src: `${includeAppEnvInfoPath}`, dest: 'dist/www/env.config.js'},
        {src: 'src/index.html', dest: 'dist/www/index.html'},
      ],
    };

    const {prodBuildEntryInfoList} = {...prodBuildConfig};

    await niceCopy(prodBuildEntryInfoList);

    await niceBuild();
  }
})();
