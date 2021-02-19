import { Controller } from 'egg';
class NewsController extends Controller {
  async list() {
    // const dataList = {
    //     list: [
    //         { id: 1, title: "test", url: '/new/1' },
    //         { id: 2, title: "test2", url: '/new/2' }

    //     ]
    // };
    // await this.ctx.render('new/list.tpl', dataList)
    const ctx = this.ctx;
    const page = ctx.query.page || 1;
    const newsList = await ctx.service.new.list(page);
    await ctx.render('news/list.tpl', { list: newsList });
  }
}

module.exports = NewsController;
