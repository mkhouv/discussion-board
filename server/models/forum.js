'use strict';
module.exports = (sequelize, DataTypes) => {
  const Forum = sequelize.define('Forum', {
    title: DataTypes.STRING,
  }, {
    classMethods: {
      associate: (models) => {
        Forum.hasMany(models.Thread, {
          foreignKey: 'forumId',
          as: 'threads'
        });
      }
    }
  });
  return Forum;
};