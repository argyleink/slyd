import './slyd/'

// restores #hash location if not first page load..
if (window.location.hash)
  window.onload = () =>
    window.location = window.location