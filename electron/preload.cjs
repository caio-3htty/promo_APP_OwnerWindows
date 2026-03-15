const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("desktop", {
  app: "promo_APP_OwnerWindows",
});

