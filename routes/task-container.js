const path = require('path');
const express = require('express');
const router = express.Router();
const { taskContainerController } = require(path.join(__dirname, '..', 'controllers'));
const { taskContainerValidation } = require(path.join(__dirname, '..', 'middlewares', 'validation'));

// get all 
router.get('/',
    taskContainerController.getAll
);

// create one
router.post('/',
    taskContainerValidation.taskContainerData,
    taskContainerController.createOne
);
// get one by id
router.get('/:id',
    taskContainerValidation.checkIdExestence,
    taskContainerController.getOne
);
// update one by id
router.patch('/:id',
    taskContainerValidation.checkIdExestence,
    taskContainerValidation.taskContainerData,
    taskContainerController.updateOne
);
// delete one by id
router.delete('/:id',
    taskContainerValidation.checkIdExestence,
    taskContainerController.deleteOne
);

module.exports = router;