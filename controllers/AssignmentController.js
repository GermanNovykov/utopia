import AssignmentModel from "../models/Assignment.js";
import Assignment from "../models/Assignment.js";
import UserModel from "../models/User.js";
import CodeBlockModel from "../models/CodeBlock.js";

export const getAll = async (req, res) => {
    try {
        const assignment = await AssignmentModel.find().exec()
        res.json(assignment)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'error occured'
        })
    }
}
export const getOne = async (req, res) => {
    try {
        const assignmentId = req.params.id // gameid
        const assignment = await AssignmentModel.findById(assignmentId)
        // const user = await UserModel.findByIdAndUpdate(req.body._id, {
        //     currentAssignment: assignment
        // });

        res.json(assignment)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'error occured'
        })
    }
}

export const create = async (req, res) => {
    try {
        const doc = new AssignmentModel({
            title: req.body.title,
            questionList: req.body.questionList,
        })
        const assignment = await doc.save()
        res.json(assignment)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'unable to create post'
        })
    }
}