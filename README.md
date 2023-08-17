const http = require('http')
const favicon = require('serve-favicon')
const path = require('path')
const finalhandler = require('finalhandler')

let count = 0

const _favicon = favicon(path.join(__dirname, 'favicon1.ico'))

const server  = http.createServer(function(request, response) {
    count++
    const done = finalhandler(request, response)

    _favicon(request, response, function(err) {
        if(err) {
            return done(err)
        } else {
            switch(request.url) {
                case '/students':
                    response.write('STUDENTS: ')
                    // response.end()
                    break
                case '/':
                case '/course':
                    response.write('BACK ' + 'FRONT ')
                    // response.end()
                    break
                default:
                    response.write('404 not found ')
                    // response.end()
            }
            response.write('Hello Node.js: ' + count)
            response.end()
        } 
    })

    
})
server.listen(4000, '127.0.0.1', function() {console.log('Server was started at port 4000')})
