import { Controller } from 'egg';
export default class LoginController extends Controller {

  // 验证登录并且生成 token
   async login() {
    const { ctx ,app} = this;
    //获取用户端传递过来的参数
    const params = ctx.request.body
    // 进行验证 data 数据 登录是否成功
    // .........
    //成功过后进行一下操作
    //生成 token 的方式
    const token = app.jwt.sign({
      username: params.userName, //需要存储的 token 数据
      pwd: params.password
    }, app.config.jwt.secret)
       // Authorization `Bearer ${tokenVal}`
    // 返回 token 到前端
    //  ctx.body = token;
     ctx.body = {
       code: 200, 
       data: {
        msg: 'success',
        token
       }
     }
  }
}