/* eslint no-use-before-define: 0 */
const path = require("path");
const join = (...args) => path.join(__dirname, ...args);

const env = process.env.NODE_ENV;
const isDev = process.env.NODE_ENV === "development";

const { ManageTempalteWatchDir } = require("@ztwx/auto-template");
const sassOpts = {
  sourceMap: false,
  prependData: `
   $--voyo-platform: h5;
   $--voyo-platform-h5: true;
  `,
  implementation: require("sass")
};

if (isDev) {
  new ManageTempalteWatchDir().watch(join("src"));
}

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        "@config": join(`src/envs/config.${env}.ts`)
      },
      extensions:[
        ".tsx",
        '.ts',
        '.mjs',
        '.js',
        '.jsx',
        '.vue',
        '.json',
        '.wasm'
      ]
    }
  },
  chainWebpack: config => {
    // config.entries().add(join("src/styles/index.scss"));
    config.entry("style").add(join("src/styles/index.scss"));
    config.module
      .rule("scss")
      .oneOf("vue")
      .use("sass-loader")
      .options(sassOpts);
    config.module
      .rule("scss")
      .oneOf("normal")
      .use("sass-loader")
      .options(sassOpts);
    config.module
      .rule("scss")
      .oneOf("normal-modules")
      .use("sass-loader")
      .options(sassOpts);
    config.module
      .rule("scss")
      .oneOf("vue-modules")
      .use("sass-loader")
      .options(sassOpts);
    const vueLoaderOpts = config.module
      .rule("vue")
      .use("vue-loader")
      .store.get("options");
    config.module
      .rule("vue")
      .use("vue-loader")
      .options({
        compilerOptions: {
          isCustomElement: tag => {
            return [
              // "voyoc-btn",
              // // "voyoc-input",
              // "voyoc-btn-icon",
              // "voyoc-menu",
              // "voyoc-dialog"
            ].includes(tag);
          },
          ...vueLoaderOpts
        }
      });
  }
};
