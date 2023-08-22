import express from 'express'
const app = express()
const port = 4000

const db = {
    courses: [
        {id: 1, title: 'front-end'},
        {id: 2, title: 'back-end'},
        {id: 3, title: 'automatic qa'},
        {id: 4, title: 'devops'}
    ]
}

app.get('/courses', function(req, res) {
    // res.send({message: 'Hello Express Yes!'})
    // res.send('<h1>Hello Express Yes!!</h1>')
    // res.json({message: 'Hello Express!'})
    // res.json('Hello Express!')
    // res.json(1000)
    // res.sendStatus(404)
    let foundCourses = db.courses
    if(foundCourses) {
        foundCourses = foundCourses.filter(function(c) {
            return c.title.indexOf(req.query.title as string) > -1
        })
    }
    res.json(foundCourses)
})

app.get('/courses/:id', function(req, res) {
    const foundCourses = db.courses.find(c => c.id === Number(req.params.id))
    if(!foundCourses) {
        res.sendStatus(404)
        return 
    }
    res.json(foundCourses)
})
// app.get('/samuray', function(req, res) {
//     res.send('Hello Samuray')
// })
// app.post ('/samuray', function(req, res) {
//     res.send('We have create Samuray!!!')
// })

app.listen(port, '127.0.0.1', function() {
    console.log(`Server was started at port http://localhost:${port}`)
})