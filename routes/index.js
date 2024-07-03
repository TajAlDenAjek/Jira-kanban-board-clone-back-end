const path=require('path');
const express=require('express');
const router=express.Router();
const taskContainerRouter=require(path.join(__dirname,'task-container.js'));
const taskRouter=require(path.join(__dirname,'task.js'));
const commentRouter=require(path.join(__dirname,'comment.js'));


router.get('/', (req, res) =>{
    res.send('<h1>KanBan dashboard API</h1>');
});

router.use('/api/taskContainer',taskContainerRouter);
router.use('/api/task',taskRouter);
router.use('/api/comment',commentRouter);


module.exports=router;