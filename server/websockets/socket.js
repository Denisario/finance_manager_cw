const WebSocket = require('ws');
const server = new WebSocket.Server({port: 4000}, ()=>console.log("WS started"));
let socket = null;
let flag = false;
const sendMessage=(message)=>{
    server.on('connection', (ws)=>{
        socket = ws;
        flag = true;
    })

    if(flag){
        socket.send(message);
        console.log("sended");
    }

}

module.exports = {server, sendMessage};