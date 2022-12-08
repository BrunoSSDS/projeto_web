
//const cors = require("cors");
const express = require('express');
const {usuarios, professores, aluno} = require('./controllers');
const cadastronewRoutes = require("./routes/cadastronew");
const path = require('path');
const methodOverride = require('method-override');


const app = express();

const session = require('express-session');
const umDia = 1000 * 60 * 60 * 24;
const sessionOptions = {
    secret: 'frasealeatoria',
    cookie: { maxAge: umDia }, 
    resave: false,
    saveUninitialized: false};

app.use(session(sessionOptions));

function secure_pass(req, res, next) {
    if (req.session.login || req.path==='/login') {
        next();
    } else {
       res.redirect("/usuario/login");
    }
}

//Traduzir os dados do corpo da requisição para variáveis
app.use(express.urlencoded({extended: true}));

//Indica que o formato dos dados seja JSON
app.use(express.json());

//Permite fazer requisições de tipos PUT/PATCH/DELETE e etc.
app.use(methodOverride('_method'));

//Configura as variáveis do Node para a View Engine EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use('/usuario', usuarios);
app.use(secure_pass);
//Ouve requisições em /comentarios passa a rota para o controller comments
app.use('/professor', professores);
app.use('/alunos', aluno);


app.use(express.json());
app.use(cors());

app.use("/cadastro", cadastronewRoutes);


app.listen(80, ()=>{
    console.log("Sistema Online na porta 80!")   
});
