const path = require('path');
const { Comment } = require(path.join(__dirname, '..', 'models'));

const getAll = async (req, res) => {
    const commments = await Comment.findAll({
        where: {
            taskId: req.params.id
        }
    });
    res.status(200).json(commments)
};
const createOne = async (req, res) => {
    const comment = await Comment.create({
        taskId: req.params.id,
        text: req.body.text
    });
    res.status(201).json(comment.dataValues)
}
const getOne = async (req, res) => {
    let commentId = req.params.id;
    const comment = await Comment.findAll({
        where: {
            id: commentId
        }
    });
    res.status(200).json(comment)
};
const updateOne = async (req, res) => {
    let commentId = req.params.id;
    let patchUpdate = {};
    if (req.body) {
        patchUpdate.text = req.body.text;
    }
    await Comment.update(patchUpdate, { where: { id: commentId } });
    const data = await Comment.findOne({ where: { id: commentId } });
    res.status(200).json(data.dataValues);
};
const deleteOne = async (req, res) => {
    let commentId = req.params.id;
    const result = await Comment.destroy({ where: { id: commentId } });
    res.status(200).json({ msg: "comment has been deleted" })
};




const commentController = {
    getAll,
    createOne,
    getOne,
    updateOne,
    deleteOne
};
module.exports = commentController;