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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `books`,
        path: `${__dirname}/src/pages/books`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `cheatsheets`,
        path: `${__dirname}/src/pages/cheatsheets`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        defaultLayouts: {
          default: require.resolve("./src/templates/pageTemplate.js"),
          books: require.resolve("./src/templates/bookPageTemplate.js")
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
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `sitemap.xml`
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
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        fields: [`title`, `categories`, `tags`, `subtitle`, `excerpt`],
        resolvers: {
          Mdx: {
            title: node => node.frontmatter.title,
            subtitle: node => node.frontmatter.subtitle,
            categories: node => node.frontmatter.categories,
            tags: node => node.frontmatter?.tags,
            excerpt: node => node.frontmatter?.excerpt,
            slug: node => node.frontmatter.slug
          }
        },
        filter: (node, getNode) => node.frontmatter.categories !== "books"
      }
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-offline`,
  ]
}
