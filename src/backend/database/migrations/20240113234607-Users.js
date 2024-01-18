'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email:{
               unique: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      phone:{
        unique: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      cpf:{
        unique: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      password:{
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};