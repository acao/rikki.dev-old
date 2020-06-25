module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        prismPreset: "prism-okaidia",
      },
    },
    "gatsby-theme-blog-darkmode",
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `The outputChannel`,
    siteTitle: `The outputChannel | Rikki Schulte's development blog`,
    siteUrl: `https://rikki.dev`,
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
