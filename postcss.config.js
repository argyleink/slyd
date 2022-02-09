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
    features: {
      'logical-properties-and-values': false, 
      'prefers-color-scheme-query': false, 
      'gap-properties': false,
      'custom-properties': false,
      'place-properties': false,
      'not-pseudo-class': false,
      'focus-visible-pseudo-class': false,
      'focus-within-pseudo-class': false,
      'color-functional-notation': false,
    }
  }),
]

const prod_plugins = [
  postcssnano({preset: 'default'}),
]

const plugins = is_prod
  ? [...dev_plugins, ...prod_plugins]
  : dev_plugins

module.exports = {
  plugins
}