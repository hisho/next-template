/* eslint-disable
   @typescript-eslint/no-var-requires
*/
const path = require('path');

module.exports = {
  trailingSlash: true, //https://nextjs.org/docs/api-reference/next.config.js/exportPathMap#adding-a-trailing-slash
  webpack(config) {
    config.resolve.alias['@src'] = path.join(__dirname, 'src');
    return config;
  },
};
