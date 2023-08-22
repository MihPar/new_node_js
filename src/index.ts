import express from 'express'
const app = express()
const port = 4000

app.get('/', function(req, res) {
    const a = 4
    if(a > 5) {
        res.send('OK')
    } else {
        res.send('Hello Express! Yes Yes!!!!')
    }
})
app.get('/samuray', function(req, res) {
    res.send('Hello Samuray')
})
app.post ('/samuray', function(req, res) {
    res.send('We have create Samuray!!!')
})

app.listen(port, '127.0.0.1', function() {console.log(`Server was started at port http://localhost:${port}`)})