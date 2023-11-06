const express = require('express');
const http = require('http')
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const port = 3000;

const route = require('./routes')
const db = require('./config/db')
db.connect()

const app = express();

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())
//XMLhttprequest,fetch, axios

// http logger
app.use(morgan('combined'));

//template engine
app.engine('hbs', handlebars.engine({
  extname: 'hbs'
}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'))

//route init
route(app)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
