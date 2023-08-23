import express from 'express'
import { createTracing } from 'trace_events'
const app = express()
const port = 4000

const HTTP_STATUS = {
    OK_200: 200,
    CREATED_201: 201,
    NO_CONTENT_204: 204,
    BAD_REQUEST_400: 400,
    NOT_FOUND_404: 404,

}

const jsonBodyMiddleware = express.json()
app.use(jsonBodyMiddleware)

const db = {
    courses: [
        {id: 1, title: 'front-end'},
        {id: 2, title: 'back-end'},
        {id: 3, title: 'automatic qa'},
        {id: 4, title: 'devops'}
    ]
}

app.get('/courses', function(req, res) {
    
    let foundCourses = db.courses
    if(req.query.title) {
        foundCourses = foundCourses.filter(function(c) {
            return c.title.indexOf(req.query.title as string) > -1
        })
    }
    res.json(foundCourses)
})

app.get('/courses/:id', function(req, res) {
    const foundCourses = db.courses.find(c => c.id === Number(req.params.id))
    if(!foundCourses) {
        res.sendStatus(HTTP_STATUS.NOT_FOUND_404)
        return 
    }
    res.json(foundCourses)
})

app.post('/courses', function(req, res) {
    if(!req.body.title) {
        res.sendStatus(HTTP_STATUS.BAD_REQUEST_400)
        return 
    }
    const createdCourses = {
        id: +(new Date()),
        title: req.body.title
    }
    db.courses.push(createdCourses)
    console.log(createdCourses)
    res.status(HTTP_STATUS.CREATED_201).json(createdCourses)
})

app.delete('/courses/:id', function(req, res) {
    db.courses = db.courses.filter(function(c) {
        return c.id !== Number(req.params.id)
    })
    res.sendStatus(HTTP_STATUS.NO_CONTENT_204)
})

app.put('/courses/:id', function(req, res) {
    if(!req.body.title) {
        res.sendStatus(HTTP_STATUS.BAD_REQUEST_400)
        return
    }
    const foundCourse = db.courses.find(function(c) {
        return c.id === Number(req.params.id)
    })
    if(!foundCourse) {
        res.sendStatus(HTTP_STATUS.NOT_FOUND_404)
        return 
    }
    foundCourse.title = req.body.title
    res.sendStatus(HTTP_STATUS.NO_CONTENT_204)
})

app.listen(port, '127.0.0.1', function() {
    console.log(`Server was started at port http://localhost:${port}`)
})