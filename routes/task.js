const path = require('path');
const express = require('express');
const router = express.Router();
const { taskController } = require(path.join(__dirname, '..', 'controllers'));
const { taskContainerValidation, taskValidation } = require(path.join(__dirname, '..', 'middlewares', 'validation'));

// get all tasks by container id
router.get('/:id',
    taskContainerValidation.checkIdExestence,
    taskController.getAll
);
// create a task belongs to a container by container id
router.post('/:id',
    taskContainerValidation.checkIdExestence,
    taskValidation.taskData,
    taskController.createOne
);
// get one task by its id
router.get('/single/:id',
    taskValidation.checkIdExestence,
    taskController.getOne
);
// update one task by its id
router.patch('/:id',
    taskValidation.checkIdExestence,
    taskValidation.taskData,
    taskController.updateOne
);
// delete one task by its id
router.delete('/:id',
    taskValidation.checkIdExestence,
    taskController.deleteOne
);

module.exports = router;