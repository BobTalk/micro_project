import { typeVerification } from '../utils/base';

const Controller1 = require('egg').Controller;
class UserController extends Controller1 {
  async findAll() {
    const ctx = this.ctx;
    const res = await ctx.service.user.findAll();
    await ctx.render('news/list.tpl', { list: res });
  }
  async addUser() {
    const { ctx } = this;
    const params = ctx.request.body;
    const findUser = await ctx.service.user.findOne(params);
    if (typeVerification(findUser) !== 'Object' && !findUser.length) {
      const res = await ctx.service.user.createUser(params);
      ctx.body = {
        code: 200,
        msg: '用户创建成功！',
        data: res,
        success: false,
      };
    } else {
      ctx.body = {
        code: 200,
        msg: '用户信息已存在！',
        success: false,
      };
    }
  }
}

module.exports = UserController;
