const path = require('path');
const withTM = require('next-transpile-modules')(['@hisho/utilities']);

// @ts-check

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
module.exports = withTM({
  reactStrictMode: true,
  /**
   * @see https://nextjs.org/docs/api-reference/next.config.js/exportPathMap#adding-a-trailing-slash
   */
  trailingSlash: true,
  webpack(config) {
    config.resolve.alias['@src'] = path.join(__dirname, 'src');
    return config;
  },
});
