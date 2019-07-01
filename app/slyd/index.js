import 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.16.0/prism.min.js'
import 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.16.0/plugins/line-numbers/prism-line-numbers.min.js'
import 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.16.0/plugins/normalize-whitespace/prism-normalize-whitespace.min.js'

import { onSlydChanged } from './slyd-observer.js'

onSlydChanged(slide => {
  console.info(slide)
  setURL(slide.target.id)
})

const setURL = hash =>
  window.location.hash = hash