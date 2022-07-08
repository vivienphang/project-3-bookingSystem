const initClassInstModel = (sequelize, DataTypes) => {
  return sequelize.define('classes_inst', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    classesId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'classes',
        key: 'id',
      }
    },
    instructorsID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'instructors',
        key: 'id',
      }
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
    underscored: true,
  });
};

module.exports = initClassInstModel;