import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'

import { default as importHTTP } from 'import-http/rollup'

const is_prod = process.env.NODE_ENV
  ? true
  : false

export default {
  input: 'app/index.js',
  output: {
    file: is_prod ? 'dist/slyd.js' : 'app/slyd.js',
    format: 'es',
  },
  plugins: [
    resolve({
      jsnext: true,
    }),
    importHTTP(),
    postcss({
      extract: false,
      inject:  false,
    })
  ],
  watch: {
    exclude: ['node_modules/**'],
  }
}