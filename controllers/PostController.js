import PostModel from "../models/Post.js";
import Post from "../models/Post.js";


export const getAll = async (req, res) => {
    try {
        const posts = await PostModel.find().populate('user').exec()
        res.json(posts)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'error occured'
        })
    }
}
export const getOne = async (req, res) => {
    try {
        const postId = req.params.id
        PostModel.findOneAndUpdate({
            _id: postId
        }, {
            $inc: { viewsCount: 1 }
            }, {
                returnDocument: 'after',
            }).then((err, doc) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    message: 'error finding post'
                })
            }
            if (!doc) {
                res.status(404).json({
                    message: "not found"
                })
            }
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'error occured'
        })
    }
}
export const remove = async (req, res) => {
    try {
        const postId = req.params.id
        PostModel.findOneAndDelete({
                _id: postId
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
        const doc = new PostModel({
            title: req.body.title,
            text: req.body.text,
            imageUrl: req.body.imageUrl,
            tags: req.body.tags,
            user: req.userId,
        })
        const post = await doc.save()
        res.json(post)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'unable to create post'
        })
    }
}