const service = require('egg').Service;
class navbar extends service { 
    async getNavbarList() {
        let res = await this.app.mysql.select('navbar', {
            columns:['name','icon','path']
        })
        return res
     }
}
module.exports = navbar