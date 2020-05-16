require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const path = require("path")

module.exports = {
  siteMetadata: {
    siteUrl: `${process.env.SITE_URL}`,
    title: `Gatsby Starter with Tailwind, Emotion`,
    description: `Gatsby Starter with Tailwind, Emotion`,
    author: `@warlock-mw`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.resolve(`${__dirname}/src/images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: path.resolve(`${__dirname}/src/images/gatsby-icon.png`), // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: path.resolve(`${__dirname}/src/utils/typography`),
      },
    },
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        exclude: [
          `/404`,
          `/404.html`,
        ],
      }
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `${process.env.SITE_URL}`,
        sitemap: `${process.env.SITE_URL}/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    /*
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `${process.env.GOOGLE_TAG_MANAGER_ID}`,
        head: true,
      }
    },
    */
    `gatsby-plugin-postcss`,
    `gatsby-plugin-emotion`,
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, 
        develop: false,
        tailwind: true,
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['slick-carousel/slick/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    }

  ],
}
