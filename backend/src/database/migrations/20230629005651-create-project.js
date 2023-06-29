'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      url: {
        type: Sequelize.STRING,
      },
      github: {
        type: Sequelize.STRING,
      }
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Projects');
  }
};