'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('users', { 
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
     },
     f_name: {
      allowNull: false,
      type: Sequelize.STRING,
     },
     l_name: {
      allowNull: false,
      type: Sequelize.STRING,
     },
     username: {
      allowNull: false,
      type: Sequelize.STRING,
      unique: true,
     },
     email: {
      allowNull: false,
      type: Sequelize.STRING,
      unique: true,
     },
     password: {
      allowNull: false,
      type: Sequelize.STRING,
     },
     address: {
      allowNull: false,
      type: Sequelize.STRING,
     },
     mobile: {
      allowNull: false,
      type: Sequelize.INTEGER,
     },
     created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
    },
    });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('users');
  }
};
