import QuestionModel from "../models/Question.js";
import Question from "../models/Question.js";
import CodeBlockModel from "../models/CodeBlock.js";


export const getAll = async (req, res) => {
    try {
        const questions = await QuestionModel.find().exec()
        res.json(questions)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'error occured'
        })
    }
}
export const getOne = async (req, res) => {
    try {
        const questionId = req.params.id
        const doc = await QuestionModel.findOne({
            _id: questionId
        })
        res.json(doc)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'error occured'
        })
    }
}
export const remove = async (req, res) => {
    try {
        const questionId = req.params.id
        QuestionModel.findOneAndDelete({
                _id: questionId
            })

                res.json(doc)

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'error occured'
        })
    }
}
export const create = async (req, res) => {
    try {
        const doc = new QuestionModel({
            title: req.body.title,
            codeBlocks: req.body.codeBlocks,
            codeFields: req.body.codeFields,
            correctPattern: req.body.correctPattern,
        })
        const question = await doc.save()
        res.json(question)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'unable to create post'
        })
    }
}