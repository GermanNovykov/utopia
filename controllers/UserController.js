import {validationResult} from "express-validator";
import bcrypt from "bcrypt";
import UserModel from "../models/User.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors.array());
        }

        const doc = new UserModel({
            fullName: req.body.fullName,
        })
        const user = await doc.save();

        res.json({user})
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Error occured',
        })
    }};

export const login = async (req, res) => {
    try {
        const user = await UserModel.findOne({ fullName: req.body.fullName });

        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        res.json({user})
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Auth error',
        })
    }

};

export const getMe = async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId);
        if (!user) {
            return res.status(404).json({
                message: 'user not found'
            })
        }

        res.json(user)
    } catch (err) {
        console.log(err)
        res.status(403).json({
            message: 'No access',
        })
    }
}