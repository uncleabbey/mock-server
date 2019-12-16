const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, './db.json'));
const middlewares = jsonServer.defaults();
server.use(jsonServer.bodyParser);


server.use(middlewares);
server.use(router);

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`JSON Server is running on localhost:${port}`)
})
