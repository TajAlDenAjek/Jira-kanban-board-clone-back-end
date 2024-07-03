const path = require('path');
const Validator = require('validatorjs');
const { Comment } = require(path.join(__dirname, '..', '..', 'models'));



const checkIdExestence = async (req, res, next) => {
    let data = { id: req.params.id };
    const validationRule = {
        id: "required|numeric",
    };
    let validation = new Validator(data, validationRule);
    const found = await Comment.findOne({
        where: {
            id: data.id,
        },
    });
    let statusCode = 400;
    if (validation.passes() && found) {
        return next();
    }
    if (!found) {
        if (validation.errors.errors.id === undefined) {
            validation.errors.errors.comment = [];
            validation.errors.errors.comment.push("comment not found");
            statusCode = 404;
        }
    }
    return res.status(statusCode).json(validation.errors.errors);
}
const commentData = async (req, res, next) => {
    let data=req.body;
    const validationRule={
        text:`required|string`,
    };
    let validation=new Validator(data,validationRule);
    if(validation.passes()){
        return next();
    }
    return res.status(400).json(validation.errors.errors);
}
const commentValidation = {
    checkIdExestence,
    commentData
}

module.exports = commentValidation;