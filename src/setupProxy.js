const {createProxyMiddleware} = require("http-proxy-middleware");

// module.exports = app => {
//   app.use(
//     "/api",
//     createProxyMiddleware({
//       target: 'http://ec2-54-245-130-236.us-west-2.compute.amazonaws.com:8080',
//       changeOrigin: true
//     })
//   );
// };
module.exports = function(app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://ec2-54-245-130-236.us-west-2.compute.amazonaws.com:8080',
      changeOrigin: true,
    })
  );
};