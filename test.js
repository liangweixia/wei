var ws = require('ws').Server;
    wss =new ws({port:8080});
    var clients = [];
    wss.on('connection', function(ws) {
        // 将该连接加入连接池
        console.log("prot:",8080);
        clients.push(ws);
        ws.on('message', function(message) {
            // 广播消息
            clients.forEach(function(ws1){
                if(ws1 !== ws) {
                    ws1.send(message);
                }
           })
        });
    
        ws.on('close', function(message) {
            // 连接关闭时，将其移出连接池
            clients = clients.filter(function(ws1){
                return ws1 !== ws
            })
        });
    });
