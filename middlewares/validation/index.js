const path=require('path');
const taskContainerValidation=require(path.join(__dirname,'taskContainer.js'));
const taskValidation=require(path.join(__dirname,'task.js'));
const commentValidation=require(path.join(__dirname,'comment.js'));

module.exports={
    taskContainerValidation,
    taskValidation,
    commentValidation
};