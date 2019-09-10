const state = {
  callbacks: new Set(),
}

export const onSlydChanged = cb =>
  state.callbacks.add(cb)

if (window.hasOwnProperty('IntersectionObserver')) {
  const slyd_observer = new IntersectionObserver(slides => {
    const [slyd] = slides.filter(slide => slide.isIntersecting)
    
    if (slyd)
      state.callbacks.forEach(cb =>
        cb(slyd))
  }, {
    root: document.querySelector('slyds'),
    rootMargin: '0px 0px 1px 0px',
    threshold: 1,
  })

  document.querySelectorAll('slyd')
    .forEach(slyd => 
      slyd_observer.observe(slyd))
}
