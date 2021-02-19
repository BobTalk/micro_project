const Service1 = require('egg').Service;
class UserService extends Service1 {
  async loginUser(params: { userName: string; password: string;[key: string]: any }) {
    const res = await this.app.mysql.select('users', { where: { user_name: params.userName, password: params.password } });
    return res[0];
  }
  async createUser(params: { userName: string; password: string;[key: string]: any }) {
    const { app } = this;
    const result = await app.mysql.insert('users', {
      user_name: params.userName,
      password: params.password,
      phone: params.phone,
      gender: params.gender,
    });
    return result;
  }
  async findOne(params: { userName: string; password: string; isRegister: boolean }) {
    const { app } = this;
    let result: [] = [];
    if (params.isRegister) { // true =》 注册
      result = await app.mysql.select('users', { userName: params.userName });
    } else {
      result = await app.mysql.query('users', { userName: params.userName, password: params.password }, [
        'user_name', 'phone', 'gender',
      ]);
    }
    console.log(result);
    console.log('result');
    return result;
  }
  async findAll() {
    const { app } = this;
    const result = await app.mysql.select('users', { age: { $gt: 20 } }, [
      'userName',
    ]);
    return result;
  }

}

module.exports = UserService;
