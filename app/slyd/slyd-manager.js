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
  playVideo(in_view_slide)
}

const removeActive = () => {
  const {active} = state.slyds

  if (active) {
    active.removeAttribute('active')
    active.removeAttribute('tabIndex')
    pauseVideo(active)
  }
}  

const setSrcs = slyd =>
  slyd.querySelectorAll('[lazy-src]')
    .forEach(lazysrc => {
      lazysrc.setAttribute('src', lazysrc.getAttribute('lazy-src'))
      lazysrc.removeAttribute('lazy-src')
    })

const playVideo = slyd =>
  Array.from(slyd.querySelectorAll('video'))
    .filter(video =>
      video.hasAttribute('src') && 
      video.paused)
    .forEach(video =>
      video.play())

const pauseVideo = slyd =>
  slyd.querySelectorAll('video')
    .forEach(video =>
      video.pause())

const setURL = hash =>
  window.location.hash = hash

onSlydChanged(slyd => {
  removeActive()
  setActive(slyd)
  
  setURL(state.slyds.active.id)
})