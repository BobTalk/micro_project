const useragent = require("useragent")
const { resolve } = require('path')
const { readFileSync } = require('fs')

const viewPath = resolve(__dirname, '../view/report/report.html')
// app  应用实例
module.exports = ({ getUser, getIp, save, auth, pathUrl, getData }, app) => {
    const template = readFileSync(viewPath).toString();
    console.log(app);
    const report = async ctx => {
        console.log(ctx.path)
        console.log('ctx.path');
        if (ctx.path === pathUrl) {
            const can = await auth(ctx)
            if (can) {
                ctx.type = 'text/html'
                const data = await getData(ctx)
                // const data = [{name:'test'}]
                console.log(data)
                console.log("data")
                ctx.body = eval(template)
                return true
            } else {
                ctx.status = 403
                return false
            }
        }
    };
    return async (ctx, next) => {
        const skip = await report(ctx)
        const agent = (ctx.agent = useragent.parse(
            ctx.request.header['user-agent']
        ))
        await next()
        if (skip) {
            return
        }
        const user = await getUser(ctx)
        const path = ctx.request.path
        const ip = await getIp(ctx)
        ctx.request.header['referrer'] || ''
        const data = {
            username: user.username || '',
            user_id: user.id || '',
            path,
            ip,
            os: agent.os.family,
            browser: agent.family,
            device: agent.device.family
        }
        try {
            await save(ctx, data)
        } catch (e) {
            ctx.logger.error(e)
        }
    }
}