const express = require('express');
const app = express();
const port = 8080;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const apiRoutes = require('./server/routes/api.routes');

apiRoutes(app);

// Ruta
// app.get("/api", (req, res) => {
//     res.json({ message: "Hola chiquis <3" });
// });

// app.post('/api/users', (req, res) => {
//     console.log('soy el body', req.body.users);
//     const { users } = req.body;
//     console.log("🚀 ~ file: server.js ~ line 16 ~ app.post ~ users", users)

//     const usersCoding = users?.map(user => (
//         {
//             ...user,
//             stack: 'MERN'
//         }
//     ))
    
//     console.log("🚀 ~ file: server.js ~ line 25 ~ app.post ~ usersCoding", usersCoding)
//     res.json({ usersCoding })
// })

app.listen( port, () => console.log(`We are listening in the port: ${port}, how cool is that!!!`) );

