'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('classes_inst', { 
    
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
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
     await queryInterface.dropTable('classes_inst');

  }
};
