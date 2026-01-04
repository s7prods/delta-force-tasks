const { contextBridge, ipcRenderer } = require('electron')
const path = require('path')

contextBridge.exposeInMainWorld('electronAPI', {
  copyFile: (src, dest) => ipcRenderer.invoke('copy-file', src, dest),
  copyFolder: (src, dest) => ipcRenderer.invoke('copy-folder', src, dest),
  getPaths: () => ({
    materialDir: path.join(__dirname, '..', 'app', 'app', 'assets', '1'),
    appRoot: path.join(__dirname, '..', '..', '..')
  })
})