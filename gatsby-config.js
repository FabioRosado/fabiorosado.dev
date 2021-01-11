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
        path: `${__dirname}/src/pages/blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/pages/projects`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        defaultLayouts: {
          default: require.resolve("./src/templates/pageTemplate.js"),
        },
        gatsbyRemarkPlugins: [
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
        background_color: `#1A2430`,
        theme_color: `#FF721E`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
        {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        hideAttribution: true,
        query: `
        {
          blog: allMdx(filter: {frontmatter: {categories: {ne: "Projects"}}}) {
            edges {
              node {
                id
                slug
                frontmatter {
                  date
                }
              }
            }
          }
          projects: allMdx(filter: {frontmatter: {categories: {eq: "Projects"}}}) {
            edges {
              node {
                id
                slug
                frontmatter {
                  date
                }
              }
            }
          }
        }`,
        mapping: {
          blog: { sitemap: `blog`},
          portfolio: { sitemap: `portfolio`},
          pages: { sitemap: `pages`}
        },
        exclude: [`/404/`, `/dev-404-page/`, `/404.html`],
        addUncaughtPages: true,
        }
      },
      {
        resolve: `gatsby-plugin-canonical-urls`,
        options: {
          siteUrl: `https://fabiorosado.dev`
        }
      },
      {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-109089626-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        }
      },
       `gatsby-plugin-robots-txt`,
       `gatsby-plugin-offline`,
  ]
}
