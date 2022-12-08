'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('professores', [
      {
        nomeprofessor: 'Sostenes',
        contato: '(99) 92321-3233',
        endereco: 'Rua: Henrique de macedo',
        cargo: 'professor WEB'
      },
      {
        nomeprofessor: 'Aline',
        contato: '(99) 94324-9193',
        endereco: 'Rua: barão de jacarei',
        cargo: 'professor Matematica'
      }         
  ], {});

},

down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('professores', null, {});

}
};

