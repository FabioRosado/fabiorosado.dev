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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
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
          {resolve: `gatsby-remark-reading-time`},
          {resolve: `gatsby-remark-prismjs`}
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
            {
              serialize: ({ query: { site, allMarkdownRemark }}) => {
                return allMarkdownRemark.edges.map(edge => {
                  if (edge.node.frontmatter.categories !== "Projects") {
                    return Object.assign({}, edge.node.frontmatter, {
                      description: edge.node.frontmatter.excerpt,
                      category: edge.node.frontmatter.categories,
                      date: edge.node.frontmatter.date,
                      url: `${site.siteMetadata.siteUrl}/${edge.node.frontmatter.slug}`,
                      guid: `${site.siteMetadata.siteUrl}/${edge.node.frontmatter.slug}`,
                      custom_elements: [{"content:encoded": edge.node.html}]
                    })
                  }
                })
              },
              query: `
              {
                allMarkdownRemark(
                  filter: {frontmatter: {categories: {ne: "Projects"}}}, 
                  sort: {fields: [frontmatter___date], order: DESC}
                ) {
                  edges {
                    node {
                      frontmatter {
                        excerpt
                        slug
                        title
                        date
                      }
                    }
                  }
                }

              }`,
              output: "/rss.xml",
              title: "FabioRosado RSS Feed",
          }
        ]
      }
    }
  ]
}
