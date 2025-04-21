export interface IComment {
  _id: string;
  _bookId: string;
  firstName: string;
  lastName?: string;
  text: string;
  createdAt: Date;
  updatedAt: Date;
}
