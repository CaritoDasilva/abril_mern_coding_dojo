const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { socketsEvents } = require('./server/controllers/sockets.controllers');
require('dotenv').config();

console.log(process.env.SECRET_KEY);
app.use(cookieParser());
// app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(cors())
require('./server/config/config.mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./server/routes/posts.routes')(app);
require('./server/routes/users.routes')(app);

const server = app.listen(port, () => console.log(`We are listening in the port: ${port}, how cool is that!!!`));

socketsEvents(server);

