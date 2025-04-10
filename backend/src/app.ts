import express from 'express'
import * as mongoose from "mongoose";
import {userRouter} from "./routers/user.router";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter)


app.listen(process.env.PORT, async () => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Server has been started on port ${process.env.PORT}`);
});