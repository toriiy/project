export interface IPurchase {
    _id: string;
    _userId: string;
    _bookId: string;
    name: string;
    price: number;
    photo: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}