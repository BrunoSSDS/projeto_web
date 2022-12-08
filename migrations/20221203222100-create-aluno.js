'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('aluno', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nomealunos: {
        type: Sequelize.STRING,
        allowNull: false
      },
      materias: {
        type: Sequelize.STRING,
        allowNull: false
      },
      notas: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')  
      }      
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('aluno');
  }
};
