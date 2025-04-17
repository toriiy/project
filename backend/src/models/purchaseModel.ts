import {model, Schema} from 'mongoose'
import {User} from "./userModel";
import {Book} from "./bookModel";
import {IPurchase} from "../interfaces/purchase.interface";

const PurchaseSchema = new Schema({
        _userId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: User
        },
        _bookId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: Book
        },
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        photo: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        },
    },
    {timestamps: true, versionKey: false},);

export const Purchase = model<IPurchase>("purchases", PurchaseSchema);