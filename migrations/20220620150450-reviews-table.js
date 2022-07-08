'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('reviews', { 
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      reservations_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'reservations',
          key: 'id',
        }
      },
      users_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        }
      },
      review: {
        type: Sequelize.STRING,
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
     await queryInterface.dropTable('reviews');

  }
};

