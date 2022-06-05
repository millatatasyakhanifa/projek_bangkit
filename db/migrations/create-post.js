"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("posts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        unique: true,
        type: Sequelize.INTEGER,
      },
      categoryId: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      description: {
        type: Sequelize.TEXT,
      },
      photo: {
        type: Sequelize.STRING,
      },
      idFeeds: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("posts");
  },
};
