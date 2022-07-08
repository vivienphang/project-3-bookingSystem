const initReservationModel = (sequelize, DataTypes) => {
  return sequelize.define('reservations', {
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
    instructorsId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'instructors',
        key: 'id',
      }
    },
    date: {
      allowNull: false,
      type: DataTypes.DATEONLY,
    },
    time: {
      allowNull: false,
      type: DataTypes.TIME,
    },
    venue: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    usersId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      }
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    comments: {
      type: DataTypes.STRING,
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

module.exports = initReservationModel;