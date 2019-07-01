import { onSlydChanged } from './slyd-observer.js'

const state = {
  slyds: {
    active: undefined,
  }
}

const setActive = slyd => {
  state.slyds.active = slyd.target
  state.slyds.active.setAttribute('active', true)
}

const removeActive = slyd => {
  if (state.slyds.active)
    state.slyds.active.removeAttribute('active')
}

const setURL = hash =>
  window.location.hash = hash

onSlydChanged(slyd => {
  removeActive(slyd)
  setActive(slyd)
  
  setURL(state.slyds.active.id)
})