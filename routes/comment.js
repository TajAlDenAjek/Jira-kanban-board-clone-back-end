const path = require('path');
const express = require('express');
const router = express.Router();
const { commentController } = require(path.join(__dirname, '..', 'controllers'));
const { taskValidation, commentValidation } = require(path.join(__dirname, '..', 'middlewares', 'validation'));


// get all comments for a task by task id 
router.get('/:id',
    taskValidation.checkIdExestence,
    commentController.getAll
);
// create comment for a task by task id
router.post('/:id',
    taskValidation.checkIdExestence,
    commentValidation.commentData,
    commentController.createOne
);
// get one comment by its id
router.get('/single/:id',
    commentValidation.checkIdExestence,
    commentController.getOne
);
// update one comment by its id
router.patch('/:id',
    commentValidation.checkIdExestence,
    commentValidation.commentData,
    commentController.updateOne
);
// delete one comment by its id
router.delete('/:id',
    commentValidation.checkIdExestence,
    commentController.deleteOne
);

module.exports = router;