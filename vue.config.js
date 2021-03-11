/* eslint no-use-before-define: 0 */
const path = require("path");
const join = (...args) => path.join(__dirname, ...args);

const env = process.env.NODE_ENV;
const yoEnv=process.env.VOYO_ENV ||"main";
const isDev = process.env.NODE_ENV === "development";
console.log("env",env);
console.log("yoEnv",yoEnv);

const infoDict={
  "main":{
    "name":"yo-pc",
    "baseUrl":"/yo-pc/",
    "filename":"index.html",
    "title":"title",
    "entries":[
      join("src/main.ts"),
      join("src/styles/index.scss")
    ],
  },
  "game":{
    "name":"yo-game",
    "baseUrl":"/yo-game/",
    "filename":"game.html",
    "title":"game",
    "entries":[
      join("src/game/game.ts"),
      join("src/game/styles.scss")
    ]
  }
}

const info=infoDict[yoEnv]||{};
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
const page={
  [info.name]:{
    entry:info.entries,
    template:"public/index.html",
    filename:info.filename,
    title:info.title,
    baseUrl:info.baseUrl
  }
}


module.exports = {
  lintOnSave: false,
  publicPath: info.baseUrl,
  pages:{...page},

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

    config.plugin("html").use(
      new (require(("html-webpack-plugin")))({
        baseUrl: info.baseUrl,
        title: info.title,
        filename: info.filename,
        publicPath: info.baseUrl,
        template : join("public/index.html")
      })
    )

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
