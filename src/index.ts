import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const a = 4
    if(a > 5) {
        res.send('OK')
    } else {
        res.send('Hello Express')
    }
})
app.get('/samurayes', (req, res) => {
    res.send('Hello samurayes!!!!!')
})
app.post('/samurayes', (req, res) => {
    res.send('We have created samuray')
})
app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/pages/home.html')
})
app.listen(port, function() {console.log(`Server was started at port http://loclahost:${port}`)})