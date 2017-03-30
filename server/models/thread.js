'use strict';
module.exports = (sequelize, DataTypes) => {
  const Thread = sequelize.define('Thread', {
    title: DataTypes.STRING,
  }, {
    classMethods: {
      associate: (models) => {
        Thread.belongsTo(models.Forum, {
          foreignKey: 'forumId',
          onDelete: 'CASCADE',
        });
        Thread.hasMany(models.Post, {
          foreignKey: 'threadId',
          as: 'posts',
        });
      }
    }
  });
  return Thread;
};