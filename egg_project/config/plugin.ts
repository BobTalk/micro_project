import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // 编译模版
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  // 跨域
  cors: {
    enable: true,
    package: 'egg-core'
  },
  // mongoose : {
  //   enable: true,
  //   package: 'egg-mongoose'
  // },
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  jwt: {
    enable: true,
    package: "egg-jwt"
  }
};

export default plugin;
