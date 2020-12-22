const Service1 = require('egg').Service
class UserService extends Service1 { 
    async add() { 
        const { ctx } = this
        const result = await ctx.model.User.create({
            userName: 'hyq_test'
        })
        return result
    }
    async findAll() { 
        const {ctx } = this
        const result = await ctx.model.User.find({ age: { $gt: 20 } }, [
            'userName'
        ])
        return result
    }

}

module.exports = UserService