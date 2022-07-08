const initInstructorModel = (sequelize, DataTypes) => {
  return sequelize.define('instructors', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      FName: {
        allowNull: false,
        type: DataTypes.STRING,
     },
      LName: {
        allowNull: false,
        type: DataTypes.STRING,
     },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      mobile: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
  }, {
  // The underscored option makes Sequelize reference snake_case names in the DB.
    underscored: true,
  });
};
module.exports = initInstructorModel;
