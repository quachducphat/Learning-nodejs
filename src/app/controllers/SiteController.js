
const Course = require('../models/course')
const {mutipleMongooseToObject} = require('../../util/mongoose')
const { default: mongoose } = require('mongoose')

class SiteController {

    //[GET] /
    index(req, res, next){

       Course.find({})
            .then(courses => {
                res.render('home',{
                    courses: mutipleMongooseToObject(courses)
                })
                // courses = courses.map(course => course.toObject())
                // res.render('home', {courses})
            })
            .catch(next)
    }

    //[GET] /search
    search(req, res){
        res.render('search')
    }

}

module.exports = new SiteController;