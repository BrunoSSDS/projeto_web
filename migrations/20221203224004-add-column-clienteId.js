'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('aluno',
    'professorId',
    {
      type: Sequelize.INTEGER,
      allowNull: false,
      references:{
        model: 'professores',
        key: 'id'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.removeColumn('aluno', 
    'professorId');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
