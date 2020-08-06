module.exports = {
  siteMetadata: {
    title: `Fabio Rosado`,
    description: `My time is divided between flying and coding`,
    author: `@FabioRosado`,
    siteUrl: `https://fabiorosado.dev/`

  },
  pathPrefix: `/`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve("./src/templates/blog.js"),
          projects: require.resolve("./src/templates/projectsTemplate.js") 
        },
        gatsbyRemarkPlugins: [
          {resolve:`gatsby-remark-images-anywhere`},
          {resolve: `gatsby-remark-relative-images`},
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 500,
              quality: 100,
              linkImagesToOriginal: true,
              backgroundColor: '#1A2430',
            }
          },
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fabio Rosado Portfolio`,
        short_name: `FabioRosado`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
  ]
}
