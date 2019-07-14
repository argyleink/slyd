import { onSlydChanged } from './slyd-observer.js'

document.querySelectorAll('slyd')
  .forEach(slyd =>
    slyd.setAttribute('aria-role', 'article')) // authoring convenience

const state = {
  slyds: {
    active: undefined,
  }
}

const setActive = ({target:in_view_slide}) => {
  state.slyds.active = in_view_slide
  state.slyds.active.setAttribute('active', true)
  in_view_slide.setAttribute('tabIndex', -1)
  setSrcs(in_view_slide)
}

const removeActive = slyd => {
  if (state.slyds.active) {
    state.slyds.active.removeAttribute('active')
    state.slyds.active.removeAttribute('tabIndex')
  }
}  

const setSrcs = slyd =>
  slyd.querySelectorAll('[lazy-src]')
    .forEach(lazysrc =>
      lazysrc.setAttribute('src', 
        lazysrc.getAttribute('lazy-src')))

const setURL = hash =>
  window.location.hash = hash

onSlydChanged(slyd => {
  removeActive(slyd)
  setActive(slyd)
  
  setURL(state.slyds.active.id)
})