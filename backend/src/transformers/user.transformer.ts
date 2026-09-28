import { IPublicUser, IUser } from "../interfaces/user.interface";

class UserTransformer {
  public toPublic(user: IUser): IPublicUser {
    // Read allowed fields explicitly: spreading a Mongoose document exposes _doc.
    return {
      _id: user._id.toString(),
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      age: user.age,
      email: user.email,
      role: user.role,
      isDeleted: user.isDeleted,
      isVerified: user.isVerified,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}

export const userTransformer = new UserTransformer();
