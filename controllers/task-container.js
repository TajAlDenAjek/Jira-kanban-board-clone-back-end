const path = require('path');
const { TaskContainer, Task, Comment } = require(path.join(__dirname, '..', 'models'));

const getAll = async (req, res) => {
    const taskContainers = await TaskContainer.findAll({
        include: [
            {
                model: Task,
                attributes: {
                    exclude: ['TaskContainerId']
                },
                include: {
                    model: Comment,
                }
            }
        ]
    });
    res.status(200).json(taskContainers)
};

const createOne = async (req, res) => {
    const taskContainer = await TaskContainer.create({
        name: req.body.name
    });
    res.status(201).json(taskContainer.dataValues)
}

const getOne = async (req, res) => {
    let taskContainerId = req.params.id;
    const taskContainer = await TaskContainer.findOne({
        include: [
            {
                model: Task,
                attributes: {
                    exclude: ['TaskContainerId']
                },
                include: {
                    model: Comment,
                }
            }
        ],
        where: {
            id: taskContainerId
        }
    });
    res.status(200).json(taskContainer)
};

const updateOne = async (req, res) => {
    let taskContainerId = req.params.id;
    let patchUpdate = {};
    if (req.body) {
        patchUpdate.name = req.body.name;
    }
    await TaskContainer.update(patchUpdate, { where: { id: taskContainerId } });
    const data = await TaskContainer.findOne({ where: { id: req.params.id } });
    res.status(200).json(data.dataValues);
};

const deleteOne = async (req, res) => {
    let taskContainerId = req.params.id;
    const result = await TaskContainer.destroy({ where: { id: taskContainerId } });
    res.status(200).json({ msg: "taskContainer has been deleted" })
};




const taskContainerController = {
    getAll,
    createOne,
    getOne,
    updateOne,
    deleteOne
};
module.exports = taskContainerController;