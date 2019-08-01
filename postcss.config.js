const postcssPresetEnv  = require('postcss-preset-env')
const postcssImport     = require('postcss-import')
const postcsseasings    = require('postcss-easings')
const postcssnano       = require('cssnano')

const is_prod = process.env.NODE_ENV
  ? true
  : false

const dev_plugins = [
  postcsseasings(),
  postcssImport(),
  postcssPresetEnv({
    stage: 0,
    browsers: [
      '>0.25%',
      'not ie 11',
      'not op_mini all',
    ],
  }),
]

const prod_plugins = [
  postcssnano({preset: 'default'}),
]

module.exports = {
  plugins: is_prod
    ? [...dev_plugins, ...prod_plugins]
    : dev_plugins
}