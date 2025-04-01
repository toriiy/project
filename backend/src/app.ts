import express, {Request, Response, NextFunction} from 'express'
import * as mongoose from "mongoose";
import {User} from "./database/userModel";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/users', async (req:Request, res:Response, next:NextFunction) => {
    const users = await User.find();
    res.json(users)
})

app.post('/users', async (req:Request, res:Response, next:NextFunction) => {
    const user = await User.create(req.body);
    res.json(user)
})

// const connection = async () => {
//     let dbCon = false
//
//     while (!dbCon) {
//         try {
//             console.log('connecting to db...');
//             await mongoose.connect(process.env.MONGO_URI)
//             dbCon = true
//             console.log('db is available');
//         } catch (e) {
//             console.log('db unavailable, wait 3 sec')
//             await new Promise(resolve => setTimeout(resolve, 3000))
//         }
//     }
// }
//
// const start = async ()=>{
//     try {
//        await connection()
//         await app.listen(process.env.PORT, process.env.HOST)
//         console.log(`server started on port ${process.env.PORT}`)
//     } catch (e) {
//         console.log(e);
//     }
// }
//
// start()

app.listen(process.env.PORT, async () => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Server has been started on port ${process.env.PORT}`);
});