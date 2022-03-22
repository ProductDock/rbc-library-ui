/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */

const webpack = require('webpack');

module.exports = {

  webpack: {
    configure: {
      ignoreWarnings: [/Failed to parse source map/],
    },
  },
};
