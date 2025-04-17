import {model, Schema} from 'mongoose'
import {IBook} from "../interfaces/book.interface";

const BookSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        language: {
            type: String,
            required: true
        },
        originalLanguage: {
            type: String,
            required: true
        },
        originalName: {
            type: String,
            required: true
        },
        pages: {
            type: Number,
            required: true
        },
        publisher: {
            type: String,
            required: true
        },
        genre: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        photo: {
            type: String,
            required: true
        },
    },
    {timestamps: true, versionKey: false},
);

export const Book = model<IBook>("books", BookSchema);