'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('reservations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      classes_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'classes',
          key: 'id',
        }
      },
      instructors_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'instructors',
          key: 'id',
        }
      },
      date: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
      time: {
        allowNull: false,
        type: Sequelize.TIME,
      },
      venue: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      users_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        }
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      comments: {
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
     await queryInterface.dropTable('reservations');
  }
};
