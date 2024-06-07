const io = require('socket.io')(8900, {
    cors: {
        origin: '*'
    }
})

let users = [];

const addUser = (userId, socketId) => {
    !users.some((user) => user.userId === userId) && users.push({ userId, socketId })
}

const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId)
}

const getUser = (userId) => {
    return users.find(user => user.userId === userId)
}

io.on('connection', socket => {
    console.log('connected')

    socket.on('currentUser', (id) => {
        addUser(id, socket.id)
       io.emit('getUser', users)
    });



    socket.on('sendMessage', (data) => {
       const user = getUser(data.receiver)
        io.to(user.socketId).emit('getMessage', {
            sender: data.sender,
            receiver: data.receiver,
            message: data.message,
            createdAt: data.createdAt
        })


    })
    socket.on('disconnect', () => {
        removeUser(socket.id);
        console.log('disconnected')
        io.emit('getUser', users)
    })
})