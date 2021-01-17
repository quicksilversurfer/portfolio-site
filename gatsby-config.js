module.exports = {
  siteMetadata: {
    title: `Prateek Solanki - Interaction Designer`,
    description: `Interaction Design portfolio of Prateek Solanki. A User Experience design in Siemens Healthineers based out of Princeton, NJ. `,
    author: `Prateek Solanki`,
    siteUrl: `http://prateeksolanki.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-46173690-1"
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `prateek-solanki`,
        short_name: `ps-portfolio`,
        start_url: `/index`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/ps-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
