const { ipcRenderer } = require('electron')

if (
  window.location.hostname.includes('xmind') &&
  window.location.pathname.includes('/in-app')
) {
  window.parent.addEventListener('message', event => {
    ipcRenderer.sendToHost(event.data)
  })
}
