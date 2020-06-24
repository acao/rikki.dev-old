module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
    },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [
    //       {
    //         resolve: `gatsby-remark-images`,
    //         options: {
    //           // It's important to specify the maxWidth (in pixels) of
    //           // the content container as this plugin uses this as the
    //           // base for generating different widths of each image.
    //           maxWidth: 590,
    //           linkImagesToOriginal: true,
    //         },
    //       },
    //     ],
    //   },
    // },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `The outputChannel`,
    siteTitle: `The outputChannel | Rikki Schulte's development blog`,
    author: `Rikki Schulte`,
    description: `The development blog for Rikki Schulte`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/rikki_js`,
      },
      {
        name: `github`,
        url: `https://github.com/acao`,
      },
    ],
  },
}
