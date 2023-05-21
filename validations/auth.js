import { body } from 'express-validator';

export const registerValidation = [
    body('fullName', 'Say your name').isLength({min: 3}),
]
export const postCreateValidation = [
    body('title', 'Enter title of article').isLength({min: 3}).isString(),
    body('text', 'Enter text of an article').isLength({ min: 3 }).isString(),
    body('tags', 'incorrect format of tags').optional().isString(),
    body('imageURL', 'incorrect url for image').optional().isString(),
]