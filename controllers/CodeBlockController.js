import CodeBlockModel from "../models/CodeBlock.js";
import CodeBlock from "../models/CodeBlock.js";


export const getAll = async (req, res) => {
    try {
        const codeBlock = await CodeBlockModel.find().exec()
        res.json(codeBlock)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'error occured'
        })
    }
}
export const getOne = async (req, res) => {
    try {
        const codeBlockId = req.params.id
        const doc = await CodeBlockModel.findOne({
            _id: codeBlockId
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
        const codeBlockId = req.params.id
        CodeBlockModel.findOneAndDelete({
                _id: codeBlockId
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
        const doc = new CodeBlockModel({
            blockName: req.body.blockName,
            description: req.body.description,
            blockField: req.body.blockField,
        })
        const codeBlock = await doc.save()
        res.json(codeBlock)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'unable to create codeBlock'
        })
    }
}