import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from "mongoose";
import {validationResult} from "express-validator";
import {registerValidation, postCreateValidation} from './validations/auth.js';
import UserModel from './models/User.js'
import PostModel from './models/Post.js'
import bcrypt from 'bcrypt';
import checkAuth from "./utils/checkAuth.js";
import * as UserController from "./controllers/UserController.js";
import * as PostController from "./controllers/PostController.js";
import * as QuestionController from "./controllers/QuestionController.js";
import * as AssignmentController from "./controllers/AssignmentController.js";
import * as CodeBlockController from "./controllers/CodeBlockController.js";
import Assignment from "./models/Assignment.js";
import cors from 'cors'
mongoose
    .connect('mongodb+srv://admin:123@cluster1.cbfhu7t.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('db ok'))
    .catch((err) => console.log('db error', err));

const app = express();
app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('This is frontend');
})
// User
app.post('/login', UserController.login) //done
app.post('/register', registerValidation, UserController.register); //done
app.get('/me', UserController.getMe) // not done

// Questions, modify by admin
app.get('/admin/questions', QuestionController.getAll) // done
app.get('/admin/questions/:id', QuestionController.getOne); // done
app.post('/admin/questions', QuestionController.create) // done
app.delete('/admin/questions', QuestionController.remove)

// Codeblocks, modify by admin
app.get('/admin/codeblocks', CodeBlockController.getAll) // done
app.get('/admin/codeblocks/:id', CodeBlockController.getOne); // done
app.post('/admin/codeblocks', CodeBlockController.create) // done
app.delete('/admin/codeblocks', CodeBlockController.remove)

// Assignment
app.get('/game/:id', AssignmentController.getOne);
app.post('/admin/assignments', AssignmentController.create)
app.get('/admin/assignments', AssignmentController.getAll)

// unused
app.get('/posts', PostController.getAll);
app.get('/posts/:id', PostController.getOne);
app.post('/posts', checkAuth, postCreateValidation, PostController.create);
app.delete('/posts', PostController.remove);
// app.patch('/posts', PostController.update);

app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    };

    console.log('server OK');
})