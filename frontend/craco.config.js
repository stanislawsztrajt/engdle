const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "features": path.resolve(__dirname, "src/features"),
      "utils": path.resolve(__dirname, "src/utils"),
      "assets": path.resolve(__dirname, "src/assets"),
      "pages": path.resolve(__dirname, "src/pages"),
    },
  },
};