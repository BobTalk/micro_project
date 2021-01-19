const Service1 = require('egg').Service
class UserService extends Service1 { 
    async loginUser(params: {userName:string, password: string, [key: string]: any}) { 
        let res = await this.app.mysql.select('users', { user_name: params.userName, password: params.password })
        console.log(res)
    }
    async createUser(params: {userName:string, password: string, [key: string]: any}) { 
        const { ctx } = this
        const result = await ctx.model.User.create({
            userName: params.userName,
            password: params.password,
            phone: params.phone,
            gender: params.gender
        })
        return result
    }
    async findOne(params: { userName: string, password: string, isRegister: Boolean }) { 
        const { ctx } = this
        let result:[] = []
        if (params.isRegister) { // true =》 注册
            result = await ctx.model.User.find({ userName: params.userName })
        } else {
            result = await ctx.model.User.findOne({ userName: params.userName, password: params.password }, [
                'userName','phone', 'gender'
            ])
        }
        console.log(result);
        console.log("result");
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