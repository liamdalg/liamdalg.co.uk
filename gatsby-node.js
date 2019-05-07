/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// leave this, fixes particles.js not playing nicely with gatsby build :(
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /particles.js/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
