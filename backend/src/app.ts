import express from "express";
import * as mongoose from "mongoose";

import { bookRouter } from "./routers/book.router";
import { commentRouter } from "./routers/comment.router";
// import { ApiError } from "./errors/api-error";
import { userRouter } from "./routers/user.router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);
app.use("/books", bookRouter);
app.use("/comments", commentRouter);

// app.use(
//   "*",
//   (err: ApiError, req: Request, res: Response, next: NextFunction) => {
//     const message = err.message ?? "Something went wrong";
//     const status = err.status ?? 500;
//     res.status(status).json({ status, message });
//   },
// );

app.on("uncaughtException", (error) => {
  console.error("Uncaught Exception", error);
  process.exit(1);
});

app.listen(process.env.PORT, async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log(`Server has been started on port ${process.env.PORT}`);
});
