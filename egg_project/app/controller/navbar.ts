import { Controller } from 'egg';
export default class navbar extends Controller {
    async getList() {
        const { ctx } = this;
        let res = await ctx.service.navbar.getNavbarList()
        console.log(res)
        console.log(" ///////////// ")
        ctx.body = {
            code: 200,
            msg: '查询成功',
            success: true,
            data: res
        }
    }
}