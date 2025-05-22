export interface IToken {
  _id: string;
  _userId: string;
  accessToken: string;
  refreshToken: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ITokenPayload {
  userId: string;
  role: string;
}

export type ITokenPair = Pick<IToken, "accessToken" | "refreshToken">;
