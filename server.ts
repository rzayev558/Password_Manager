const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);

server.post('/users', (req, res) => {
    const user = req.body;
    // Perform any additional operations with the user data, such as validation or saving to a database
    router.db.get('users').push(user).write();

    res.json(user);
});

const port = 3000;
server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
});
