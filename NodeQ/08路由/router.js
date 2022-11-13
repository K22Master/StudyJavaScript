const fs = require('fs');
function route(res, pathName) {
    switch (pathName) {
        case '/login':
            res.writeHead(200, {
                'Content-Type': 'text/html; charset=utf-8'
            });
            res.write(fs.readFileSync('./static/login.html'), 'utf-8'); break;
        case '/home':
            res.writeHead(200, {
                'Content-Type': 'text/html; charset=utf-8'
            });
            res.write(fs.readFileSync('./static/home.html'), 'utf-8'); break;
        case '/favicon.ico':
            res.writeHead(200, {
                'Content-Type': 'image/x-icon; charset=utf-8'
            });
            res.write(fs.readFileSync('./static/01.ico')); break;
        default:
            res.writeHead(404, {
                'Content-Type': 'text/html; charset=utf-8'
            });
            res.write(fs.readFileSync('./static/404.html'), 'utf-8'); break;
    }
}
module.exports = route;