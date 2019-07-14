import { onSlydChanged } from './slyd-observer.js'

document.querySelectorAll('slyd')
  .forEach(slyd =>
    slyd.setAttribute('aria-role', 'article'))

const state = {
  slyds: {
    active: undefined,
  }
}

const setActive = slyd => {
  state.slyds.active = slyd.target
  state.slyds.active.setAttribute('active', true)
  slyd.target.setAttribute('tabIndex', -1)
}

const removeActive = slyd => {
  if (state.slyds.active) {
    state.slyds.active.removeAttribute('active')
    state.slyds.active.removeAttribute('tabIndex')
  }
}

const setURL = hash =>
  window.location.hash = hash

onSlydChanged(slyd => {
  removeActive(slyd)
  setActive(slyd)
  
  setURL(state.slyds.active.id)
})