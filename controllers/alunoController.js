const {professor, alunos} = require('../models');
const {Router} = require('express');

const roteador = Router();
//CRUD - Create, Read, Update, Destroy em REST
roteador.get('/', async(req, res)=>{
    
    const aluno = await alunos.findAll({
        include: [{model: professor}]
     });

    //A parte que mostra o views (arquivo)
    res.render('aluno/index', {aluno});
});

roteador.get('/novo', (req, res)=>{
    include: [
        [{model:professor}]
        ]
    res.status(200).render('aluno/new');
});

//Apresenta
roteador.post('/', async (req, res)=>{
    const {nomealunos, materias, notas, nomeprofessor} = req.body;
    
    const {id} = await professor.findOne({
        where: {nomeprofessor: nomeprofessor}
     });

     if(!id){
         res.send('<h1>professor não encontrado</h1>');
     }else{
        const professorID = id;
        await alunos.create({nomealunos, materias, notas, professorID});
    res.status(200).redirect('/alunos');
     }
});

module.exports = roteador;