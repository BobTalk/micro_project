const service = require('egg').Service;
class Navbar extends service {
  async getNavbarList() {
    const res = await this.app.mysql.select('navbar', {
      columns: [ 'name', 'icon', 'path' ],
    });
    return res;
  }
}
module.exports = Navbar;
