import { Application } from 'egg';

// export default (app: Application) => {
//   const { controller, router } = app;

//   router.get('/', controller.home.index);
// };
module.exports = (app: Application) => { 
  const { controller, router, jwt } = app  
  // const jwt = middleware.jwt(app.config.jwt);
  router.get('/news', controller.news.list)
  router.post("/login", controller.login.login)
  router.get("/user/add", jwt, controller.user.findAll)
}
// config.default.js 
// config.middleware = [ 'jwt' ]

// config.jwt = {
//     enable: true,
//     ignore: [ '/api/v1/test/', '/public/' ], // 哪些请求不需要认证
// }