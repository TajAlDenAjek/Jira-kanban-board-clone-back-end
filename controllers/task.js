const path = require('path');
const { Task, Comment } = require(path.join(__dirname, '..', 'models'));

const getAll = async (req, res) => {
    const tasks = await Task.findAll({
        include: [
            {
                model: Comment,
            }
        ],
        where: {
            taskContainerId: req.params.id
        }
    });
    res.status(200).json(tasks)
};
const createOne = async (req, res) => {
    const task = await Task.create({
        taskContainerId: req.params.id,
        title: req.body.title,
        description: req.body.description
    });
    res.status(201).json(task.dataValues)
}

const getOne = async (req, res) => {
    let taskId = req.params.id;
    const task = await Task.findAll({
        include: [
            {
                model: Comment,
            }
        ],
        where: {
            id: taskId
        }
    });
    res.status(200).json(task)
};


const updateOne = async (req, res) => {
    let taskId = req.params.id;
    let patchUpdate = {};
    if (req.body) {
        patchUpdate.title = req.body.title;
    }
    if(req?.body?.description){
        patchUpdate.description = req.body.description;
    }
    if(req?.body?.taskContainerId){
        patchUpdate.taskContainerId=req.body.taskContainerId;
    }
    await Task.update(patchUpdate, { where: { id: taskId } });
    const data = await Task.findOne({ where: { id: taskId } });
    res.status(200).json(data.dataValues);
};
const deleteOne = async (req, res) => {
    let taskId = req.params.id;
    const result = await Task.destroy({ where: { id: taskId } });
    res.status(200).json({ msg: "task has been deleted" })
};




const taskController = {
    getAll,
    createOne,
    getOne,
    updateOne,
    deleteOne
};
module.exports = taskController;