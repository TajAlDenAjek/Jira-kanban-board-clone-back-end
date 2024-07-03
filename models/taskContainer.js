'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TaskContainer extends Model {
    static associate(models) {
      TaskContainer.hasMany(models.Task);
      models.Task.belongsTo(TaskContainer, { foreignKey: 'taskContainerId' });
    }
  }
  TaskContainer.init({
    id:{
      type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue:DataTypes.NOW
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue:DataTypes.NOW
    },
  }, {
    sequelize,
    modelName: 'TaskContainer',
  });
  return TaskContainer;
};