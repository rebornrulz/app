(function(){"use strict";const{ipcRenderer:o,webFrame:n,contextBridge:i}=require("electron");function t(e){if(!e||!e.startsWith("vscode:"))throw new Error(`Unsupported event IPC channel '${e}'`);return!0}const s={ipcRenderer:{send(e,...r){t(e)&&o.send(e,...r)},invoke(e,...r){if(t(e))return o.invoke(e,...r)}},webFrame:{setZoomLevel(e){typeof e=="number"&&n.setZoomLevel(e)}}};try{i.exposeInMainWorld("vscode",s)}catch(e){console.error(e)}})();

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/d037ac076cee195194f93ce6fe2bdfe2969cc82d/core/vs/base/parts/sandbox/electron-sandbox/preload-slim.js.map
