'use strict';
module.exports = (sequelize, DataTypes) => {
  const Collaborators = sequelize.define('Collaborators', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Collaborators.associate = function(models) {
    // associations can be defined here
  };
  return Collaborators;
};