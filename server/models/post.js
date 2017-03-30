'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    content: DataTypes.STRING,
  }, {
    classMethods: {
      associate: (models) => {
        Post.belongsTo(models.Thread, {
          foreignKey: 'threadId',
          onDelete: 'CASCADE',
        });
      }
    }
  });
  return Post;
};