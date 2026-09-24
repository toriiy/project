import { Request } from "express";
import multer, { FileFilterCallback } from "multer";

import { ApiError } from "../errors/api-error";

const storage = multer.memoryStorage();

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  callback: FileFilterCallback,
) => {
  if (!file.mimetype.startsWith("image/")) {
    callback(new ApiError("Only image files are allowed", 400));
    return;
  }
  callback(null, true);
};

class UploadMiddleware {
  public photo = multer({
    storage,
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 },
  }).single("photo");
}

export const uploadMiddleware = new UploadMiddleware();
