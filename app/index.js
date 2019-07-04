import './slyd/'

if (navigator.serviceWorker && !navigator.serviceWorker.controller)
  navigator.serviceWorker.register('/service-worker.js')