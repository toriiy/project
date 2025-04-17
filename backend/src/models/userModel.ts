import {model, Schema} from "mongoose";
import {IUser} from "../interfaces/user.interface";

const UserSchema = new Schema({
        username: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true,
            default: 'user'
        },
        isDeleted: {
            type: Boolean,
            default: false
        },
        isVerified: {
            type: Boolean,
            default: false
        },
    },
    {timestamps: true, versionKey: false},
);

export const User = model<IUser>("users", UserSchema);