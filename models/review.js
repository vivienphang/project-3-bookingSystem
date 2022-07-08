const initReviewModel = (sequelize, DataTypes) => {
  return sequelize.define('reviews', {
    reservationId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'reservations',
        key: 'id',
      }
    },
    usersID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      }
    },
    review: {
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

module.exports = initReviewModel;