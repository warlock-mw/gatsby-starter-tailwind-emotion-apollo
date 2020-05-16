const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@atoms": path.resolve(__dirname, "src/components/atoms"),
        "@molecules": path.resolve(__dirname, "src/components/molecules"),
        "@organisms": path.resolve(__dirname, "src/components/organisms"),
        "@templates": path.resolve(__dirname, "src/components/templates"),
      },
    },
  })
}
