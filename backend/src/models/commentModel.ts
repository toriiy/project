import {model, Schema} from 'mongoose'
import {Book} from "./bookModel";
import {IComment} from "../interfaces/comment.interface";

const CommentSchema = new Schema({
        _bookId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: Book
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: false
        },
        text: {
            type: String,
            required: true
        },
    },
    {timestamps: true, versionKey: false});

export const Comment = model<IComment>("comments", CommentSchema);