const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

// koa是洋葱路由，这个是中间件，它放在接口的前面或者都没都是一样效果。
app.use(async (ctx, next) => {
  console.log('koa-cors设置');
  ctx.set('Access-Control-Allow-Origin', '*'); // 访问控制允许来源
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS'); // 访问控制允许方法
  ctx.set('Access-Control-Allow-Credentials', 'true'); // 访问控制允许凭据(cookie等)
  ctx.set(
    'Access-Control-Allow-Headers',
    'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild'
  ); // 访问控制允许标头
  ctx.set('Access-Control-Expose-Headers', 'true'); // 访问控制公开标头
  ctx.set('Access-Control-Max-Age', 600); // 访问控制缓存，将预检请求的结果缓存 10 分钟

  await next();
});

router.get('/getdata', (ctx, next) => {
  console.log('调用了/getdata接口');
  ctx.body = { data: { name: 'vue' } };
  next();
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3200, () => {
  console.log('监听3200...');
});
