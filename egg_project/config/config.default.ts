import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1607998155266_4223';
  config.cluster = {
    listen: {
      path: '',
      port: 3000,
      hostname: 'localhost'
    }
  };
  // add your egg config in here
  config.middleware = [];
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks'
    }
  }
  // 安全配置 （https://eggjs.org/zh-cn/core/security.html）
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    // 允许访问接口的白名单
    domainWhiteList: ['http://localhost:8080', 'http://localhost:3000'],
  };
  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };
  // jwt
  config.jwt = {
    secret: 'abcdefghijklmnopqrstuvwxyz1234567890'
  }
  config.cors = {
    origin: '*',
    allowMethods: 'GET, HEAD, PUT, POST, DELETE, PATCH'
  }
  config.mongoose = {
    url: 'mongodb://hyq:123456@localhost:27017',  // mongodb://dbName:dbPwd@localhost:27017 有用户名密码
    options: {
      useNewUrlParser: false
    }
  }
  config.tracer = {
    // 获取用户信息回调
    getUser(ctx) {
      return ctx.session.user || ''
    },
    // 获取IP回调
    getIp(ctx) {
      if (ctx.app.config.proxy && ctx.request.ips) {
        return ctx.request.ips
      }
      return ctx.request.ip || ''
    },
    // 存储数据回调
    async save(ctx, data) {
      if (ctx.model && ctx.model.Tracer) {
        return await ctx.model.Tracer.create(data)
      }
      return
    },
    async auth() {
      return true
    },
    // 获取数据回调
    async getData(ctx) {
      if (ctx.model && ctx.model.Tracer) {
        return await ctx.model.Tracer.findAll()
      }
      return []
    },
    // 报告页面所在的URL
    pathUrl: '/tracer/_report'

  }
  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
