const User = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    { timestamps: false },
  );

  users.associate = (models) => {
    users.hasMany(models.sales, { foreignKey: 'userId', as: 'sales' });
  };

  return users;
};

module.exports = User;
