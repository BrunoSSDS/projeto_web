const usuarios = require('./usuariosController');
const professores = require('./professoresController');
const aluno = require('./alunoController')


const controllers = {
    usuarios: usuarios,
    professores: professores,
    aluno: aluno
}

module.exports = controllers;