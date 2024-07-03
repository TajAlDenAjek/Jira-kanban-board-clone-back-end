'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    //one to many (taskcontainer to tasks)
    queryInterface.addConstraint('Tasks',{
      fields:['taskContainerId'],
      type:'foreign key',
      name:'task_taskContainer_association',
      references:{
        table:'TaskContainers',
        field:'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
    //one to many (task to comments)
    queryInterface.addConstraint('Comments',{
        fields:['taskId'],
        type:'foreign key',
        name:'comment_task_association',
        references:{
          table:'Tasks',
          field:'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });
  },

  async down (queryInterface, Sequelize) {
    //one to many (taskcontainer to tasks)
    await queryInterface.removeConstraint('Tasks', 'task_taskContainer_association');
    //one to many (task to Comments)
    await queryInterface.removeConstraint('Comments', 'comment_task_association');
    
  }
};