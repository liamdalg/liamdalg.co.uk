module.exports = {
  siteMetadata: {
    title: `Liam Dalgarno`,
    description: `Personal blog built with Gatsby.`,
    author: `@liamdalg`,
    social: [
      {
        name: 'github',
        link: 'https://github.com/liamdalg',
      },
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/liamdalg/',
      },
      {
        name: 'twitter',
        link: 'https://twitter.com/Dalgrayno',
      },
    ],
    skills: [
      {
        name: 'react',
        text: 'JS + React',
        level: 0.75,
      },
      {
        name: 'dot-net',
        text: 'C# .NET',
        level: 0.8,
      },
      {
        name: 'python',
        text: 'Python',
        level: 1,
      },
      {
        name: 'cplusplus',
        text: 'C/C++',
        level: 0.5,
      },
      {
        name: 'html-five',
        text: 'HTML/CSS',
        level: 0.9,
      },
    ],
    navLinks: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'Blog',
        link: '/blog',
      },
      {
        name: 'Projects',
        link: '/projects',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
