const path = require('path');
const taskContainerController = require(path.join(__dirname, 'task-container.js'));
const taskController = require(path.join(__dirname, 'task.js'));
const commentController = require(path.join(__dirname, 'comment.js'));

module.exports =
{
    taskContainerController,
    taskController,
    commentController
};