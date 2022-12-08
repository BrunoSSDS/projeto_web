const {professor} = require('../models');
const {Router} = require('express');

const roteador = Router();
//CRUD - Create, Read, Update, Destroy
//em REST
roteador.get('/', async(req, res)=>{
    
    const professores = await professor.findAll({
        //include: [
            //[{model:User}]
        //]
     });

    //A parte que mostra o views (arquivo)
    res.render('professores/index', {professores});
});

roteador.get('/novo', (req, res)=>{
    res.status(200).render('professores/new');
});

roteador.get('/:id', async(req, res)=>{
    const {id} = req.params;

    let professor = await professor.findByPk(id);

    res.render('professores/edit', {professor});
});

roteador.post('/', async (req, res)=>{
    const {nomeprofessor, contato, endereco, cargo} = req.body;
    
    await professor.create({nomeprofessor, contato, endereco, cargo});
    res.status(200).redirect('/professor');
});

//Atualiza recurso existente
roteador.patch('/:id', async(req, res)=>{
    
    let {endereco} = req.body;
    await professor.update({endereco},
        {
            where: {id: req.params.id}
        }
    );
    res.status(200).redirect('/professor');
});

roteador.delete('/:id', async(req, res)=>{

    await professor.destroy(
        {
            where: {id: req.params.id}
        }
    );

    res.status(200).redirect('/professor');
});

module.exports = roteador;