//REQUERIMIENTOS
const express = require('express');
const path = require('path');
const session = require('express-session');
const cookies = require('cookie-parser');


const res = require('express/lib/response');

const app = express();
const cors = require("cors");
var corsOptions = {
    origin: "*"
  };

  app.use(cors(corsOptions));
let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header("Access-Control-Allow-Methods", "OPTIONS, POST, GET, PUT, DELETE");
    res.header('Access-Control-Allow-Headers', "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
    next();
  }
app.use(allowCrossDomain);
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors());

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));

const methodOverride = require('method-override');
app.use(methodOverride('_method'));



const usersRouter = require("./routes/usersRouter");

const userLogMiddleware = require('./middlewares/userLogMiddleware');

const apiRoutes = require("./routes/api.routes");

const publicPath = path.resolve(__dirname,'./public');


app.use(session({
    secret: 'mensaje secreto',
    resave: false,
    saveUninitialized: false
}));

app.use(cookies());

app.use(userLogMiddleware);

app.use(express.urlencoded({extended:false}));

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./src/views");

//Habilitar el PUT, DELETE y PATCH como metodos 
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



//RUTAS

app.use('/users',usersRouter);


// ruta api
app.use('/api', apiRoutes);






//Servidor
app.listen(process.env.PORT || 3000, () =>console.log("Servidor Corriendo en Puerto 3000"));

module.exports = app;