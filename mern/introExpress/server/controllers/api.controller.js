
module.exports.greeting = (req, res) => {
    res.json({ message: "Hola chiquis <3" });
}

module.exports.getUsers = (req, res) => {
    console.log('soy el body', req.body.users);
        const { users } = req.body;
        console.log("🚀 ~ file: server.js ~ line 16 ~ app.post ~ users", users)

        const usersCoding = users?.map(user => (
            {
                ...user,
                stack: 'MERN'
            }
        ))
        
        console.log("🚀 ~ file: server.js ~ line 25 ~ app.post ~ usersCoding", usersCoding)
        res.json({ usersCoding })
}