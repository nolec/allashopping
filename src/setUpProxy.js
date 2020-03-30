const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/v1", {
      target: "https://public-beta.namebit.co.kr",
      changeOrigin: true
    })
  );
  app.use(
    proxy("/api", {
      target: "https://manage.allaglobal.com:7443/allamanager",
      changeOrigin: true
    })
  );
};
