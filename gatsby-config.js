module.exports = {
  pathPrefix: "/public",
  siteMetadata: {
    siteUrl: "https://http://cw-infinite.github.io/cw_main",
    title: "cw_main",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
