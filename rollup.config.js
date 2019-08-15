import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import { terser } from "rollup-plugin-terser"
import { default as importHTTP } from 'import-http/rollup'

const is_prod = process.env.NODE_ENV
  ? true
  : false

const dev_plugins = [
  resolve({
    jsnext: true,
  }),
  importHTTP(),
  postcss({
    extract: false,
    inject:  false,
  })
]

const prod_plugins = [
  terser(),
]

const plugins = is_prod
  ? [...dev_plugins, ...prod_plugins]
  : dev_plugins

export default {
  input: 'app/index.js',
  output: {
    file: is_prod ? 'dist/slyd.js' : 'app/slyd.js',
    format: 'es',
  },
  plugins,
  watch: {
    exclude: ['node_modules/**'],
  }
}