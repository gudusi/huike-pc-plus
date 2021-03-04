module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "import",
      {
        libraryName: "element-plus",
        style: true,
        customStyleName: name => {
          name = name.replace(/^el-/, "");
          return `element-plus/packages/theme-chalk/src/${name}.scss`;
        }
      }
    ]
    // [
    //   "component",
    //   {
    //     libraryName: "element-ui",
    //     styleLibraryName: "theme-chalk"
    //   }
    // ]
  ]
};
