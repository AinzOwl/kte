const Koa = require('koa');
const Router = require('koa-router');
const views = require('koa-views');
const serve = require('koa-static');
const render = require('koa-ejs');
const path = require('path');
const fs = require('fs');

const app = new Koa();
const router = new Router();

// Serve static files
app.use(serve(__dirname + '/public'));

// Setup views, adding .ejs extension to all files
app.use(views(__dirname + '/src/routes', {
  extension: 'ejs'
}));

render(app, {
    root: path.join(__dirname, '/src/routes'),
    layout: 'layout',
    viewExt: 'ejs',
    cache: false,
    debug: false
  });

router.get('/', async (ctx) => {
    // render src/views/index/view.ejs
    await ctx.render('index/view');
});
    
// Define routes for each folder from routes
fs.readdirSync(__dirname + '/src/routes').forEach(function(name) {

    if (!fs.lstatSync(__dirname + '/src/routes/' + name).isDirectory()) {
        return;
    }
    // check if [*].ejs exists
    let route_files = fs.readdirSync(__dirname + '/src/routes/' + name);
    let dynamicRoutes = [];
    route_files.forEach(function(file) {
        if (file === 'view.ejs') {
            router.get('/' + name, async (ctx) => {
                await ctx.render(name + '/view');
            });
        }
        // check if file starts with _ and ends with .ejs
        else if (file.startsWith('[') && file.endsWith('].ejs')) {
            dynamicRoutes.push(file);
        }
    });

    dynamicRoutes.forEach(function(file) {
        let file_name = file.replace('.ejs', '').replace('[', '').replace(']', '');
        router.get('/' + name + '/:' + file_name, async (ctx) => {
            let params = ctx.params;
            await ctx.render(name + '/' + file, { id: params[file_name] });
        });
    });
});


// Use routes
app.use(router.routes()).use(router.allowedMethods());

app.listen(1982, () => console.log('Server running on port https://localhost:1982'));