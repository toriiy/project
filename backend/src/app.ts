import express, { NextFunction, Request, Response } from "express";
import * as mongoose from "mongoose";

import { ApiError } from "./errors/api-error";
import { authRouter } from "./routers/auth.router";
import { authorRouter } from "./routers/author.router";
import { bookRouter } from "./routers/book.router";
import { categoryRouter } from "./routers/category.router";
import { commentRouter } from "./routers/comment.router";
import { genreRouter } from "./routers/genre.router";
import { publisherRouter } from "./routers/publisher.router";
import { purchaseRouter } from "./routers/purchase.router";
import { userRouter } from "./routers/user.router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);
app.use("/authors", authorRouter);
app.use("/publishers", publisherRouter);
app.use("/genres", genreRouter);
app.use("/categories", categoryRouter);
app.use("/books", bookRouter);
app.use("/comments", commentRouter);
app.use("/auth", authRouter);
app.use("/purchase", purchaseRouter);

app.use((err: ApiError, req: Request, res: Response, next: NextFunction) => {
  const message = err.message ?? "Something went wrong";
  const status = err.status ?? 500;
  res.status(status).json({ status, message });
});

app.on("uncaughtException", (error) => {
  console.error("Uncaught Exception", error);
  process.exit(1);
});

app.listen(process.env.PORT, async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log(`Server has been started on port ${process.env.PORT}`);
});
