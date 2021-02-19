import { Controller } from 'egg';
export default class Navbar extends Controller {
  async getList() {
    const { ctx } = this;
    const res = await ctx.service.navbar.getNavbarList();
    ctx.body = {
      code: 200,
      msg: '查询成功',
      success: true,
      data: res,
    };
  }
}
