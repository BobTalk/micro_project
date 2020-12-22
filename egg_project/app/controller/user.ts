const Controller1  = require('egg').Controller
class UserController extends Controller1 {
    async findAll() { 
        const ctx = this.ctx
        let res = await ctx.service.user.findAll()
        await ctx.render('news/list.tpl', {list: res})
    }
}

module.exports = UserController