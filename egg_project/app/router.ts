import { Application } from 'egg';

// export default (app: Application) => {
//   const { controller, router } = app;
//   router.get('/', controller.home.index);
// };
module.exports = (app: Application) => { 
  const { controller, router, jwt } = app  
  router.get('/news', controller.news.list)
  router.get("/user/find", jwt, controller.user.findAll)
  router.post("/api/login", controller.login.login)
  router.post("/api/register", controller.user.addUser)
  router.get('/api/getNavBar', jwt, controller.navbar.getList)
}
// config.default.js 
// config.middleware = [ 'jwt' ]
// config.jwt = {
//     enable: true,
//     ignore: [ '/api/v1/test/', '/public/' ], // 哪些请求不需要认证
// }