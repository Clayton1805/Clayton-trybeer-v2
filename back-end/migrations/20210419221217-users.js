module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      name: { type: Sequelize.STRING, allowNull: false },
      email: { type: Sequelize.STRING, allowNull: false, unique: true },
      password: { type: Sequelize.STRING, allowNull: false },
      role: { type: Sequelize.STRING, allowNull: false },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('users');
  },
};
