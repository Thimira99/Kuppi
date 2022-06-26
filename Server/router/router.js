import Router, { } from '@koa/router';

import { save, getAll, getById, updateById, deleteOne, getByName } from '../Posts/postsAdapter.js';

const postRouter = new Router({
    prefix: '/customer'
});

postRouter.post('/', async (ctx) => {

    const data = ctx.request.body;
    ctx.body = await save(data);

    ctx.status = 201

});

postRouter.get('/', async (ctx) => {

    ctx.body = await getAll();
    ctx.set('Content-Type', 'application.json');
    ctx.status = 201

});

postRouter.get('/:id', async (ctx) => {
    const id = ctx.params.id;
    ctx.body = await getById(id);
    ctx.set('Content-Type', 'application.json');
    ctx.status = 201

});

postRouter.put('/:id', async (ctx) => {
    const id = ctx.params.id;
    ctx.body = await updateById(id, ctx.request.body);
    ctx.set('Content-Type', 'application.json');
    ctx.status = 201

});

postRouter.delete('/:id', async (ctx) => {
    const id = ctx.params.id;
    ctx.body = await deleteOne(id);
    ctx.set('Content-Type', 'application.json');
    ctx.status = 201

});

postRouter.get('/getByName', async (ctx) => {
    // const name = ctx.request.body;
    // console.log(name);
    ctx.body = await getByName("Damitha");
})


export default postRouter;

