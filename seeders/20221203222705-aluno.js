'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('aluno', [
      {
        nomealunos: 'Bruno',
        materias: 'portugues',
        notas: 'Medio',
        professorID: 1
    },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('aluno', null, {});
  }
};
