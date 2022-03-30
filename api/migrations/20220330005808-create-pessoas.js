'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('Pessoas', { 
       id_: {
         allowNull: false,
         autoIncrement: true,
         primaryKey: true,
         type: Sequelize.INTEGER
        },
        nome: {
          allowNull: false,
          type: Sequelize.STRING
        },
        ativo: {
          allowNull: false,
          type: Sequelize.BOOLEAN
        },
        email: {
          allowNull: false,
          type: Sequelize.STRING
        },
        role: {
          allowNull: false,
          type: Sequelize.STRING
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('Pessoas');
  }
};
