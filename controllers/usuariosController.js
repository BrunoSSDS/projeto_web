const {Router} = require('express');

const {Usuario} = require('../models');
roteador = Router();


roteador.get('/login', (req, res)=>{
    res.status(200).render('usuarios/login');
});

roteador.get('/logoff', (req, res)=>{
    req.session.destroy();
    res.redirect('/usuarios/login');
});


roteador.post('/login', async (req, res)=>{
    const {login, senha} = req.body;

    const resposta = await Usuario.findOne({
        where: {
            login: login,
            senha: senha
        }
    });

    req.session.login = false;

    if(resposta){
        req.session.login = true;
        req.session.idUsuario = resposta.id;
        res.redirect('/professor');
    }else{
        res.redirect('/usuario/login');
    }
});

roteador.get('/', async (req, res)=>{
    const usuarios = await Usuario.findAll({
        
    });

    res.status(200).send(usuarios);
});

roteador.get('/novo', async(req, res)=>{
});

roteador.get('/:id', async (req, res)=>{
});

roteador.post('/', async (req, res)=>{

});

roteador.patch('/:id', async (req, res)=>{

});

roteador.delete('/:id', async (req, res)=>{

    
});

module.exports = roteador;