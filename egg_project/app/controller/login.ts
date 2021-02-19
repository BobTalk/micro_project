import { Controller } from 'egg';
// import { typeVerification } from '../utils/base';
export default class LoginController extends Controller {
  // 验证登录并且生成 token login ==> mongodb
  // async login() {
  //   const { ctx, app } = this;
  //   //获取用户端传递过来的参数
  //   const params = ctx.request.body
  //   let res = await ctx.service.user.findOne(params)
  //   if (typeVerification(res) != 'Object' && !res.length) { // 无用户
  //     ctx.body = {
  //       code: 500,
  //       success: false,
  //       msg: '用户信息不存在'
  //     }
  //     return
  //   }
  //   // 进行验证 data 数据 登录是否成功
  //   // .........
  //   //成功过后进行一下操作
  //   //生成 token 的方式
  //   const token = app.jwt.sign({
  //     username: params.userName, //需要存储的 token 数据
  //     pwd: params.password
  //   }, app.config.jwt.secret)
  //   // Authorization `Bearer ${tokenVal}`
  //   // 返回 token 到前端
  //   //  ctx.body = token;
  //   ctx.body = {
  //     code: 200,
  //     msg: '登录成功',
  //     success: true,
  //     token,
  //     userInfo: res
  //   }
  // }
  async login() {
    const { ctx, app } = this;
    const params = ctx.request.body;
    const res = await ctx.service.user.loginUser(params);
    if (!res) { // 数据不存在
      ctx.body = {
        code: 200,
        success: false,
        msg: '用户信息不存在',
      };
      return;
    }
    const token = app.jwt.sign({
      username: params.userName, // 需要存储的 token 数据
      pwd: params.password,
    }, app.config.jwt.secret);
    ctx.body = {
      code: 200,
      msg: '登录成功',
      success: true,
      token,
      userInfo: res,
    };

  }
}
