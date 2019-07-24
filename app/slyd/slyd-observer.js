const state = {
  callbacks: [],
}

export const onSlydChanged = cb =>
  state.callbacks.push(cb)

if (window.hasOwnProperty('IntersectionObserver')) {
  const slyd_observer = new IntersectionObserver(slides => {
    const [slyd] = slides.filter(slide => slide.isIntersecting)
    
    if (slyd)
      state.callbacks.forEach(cb =>
        cb(slyd))
  }, {
    root: document.querySelector('slyds'),
    rootMargin: '0px',
    threshold: 1,
  })

  document.querySelectorAll('slyd')
    .forEach(slyd => 
      slyd_observer.observe(slyd))
}
