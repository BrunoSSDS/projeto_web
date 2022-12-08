'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('usuarios', [
      {
        nome: 'admin',
        login: 'admin',
        senha: '123',
        funcao: 'administrador',
        matricula: '1234'
      },
      {
        nome: 'Professor',
        login: 'Professor',
        senha: '123',
        funcao: 'Professor',
        matricula: '1234'
    },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
