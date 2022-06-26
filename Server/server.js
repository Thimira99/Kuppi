import koa from 'koa';
import bodyparser from 'koa-bodyparser';
import postRouter from './router/router.js';
import './db/db.js';
import cors from 'koajs-cors';

const app = new koa();
app.use(bodyparser());

app.use(cors({
    origin: "*"
}));

app.use(postRouter.routes()).use(postRouter.allowedMethods());

app.use(ctx => {
    ctx.body = "<h1>Hellow World</h1>";
})

app.listen(5000, () => {
    console.log("App running on port 3000");
})