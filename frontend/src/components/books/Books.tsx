import React, {useEffect, useState} from 'react';
import {ClipLoader} from "react-spinners";
import {IBook} from "../../models/IBook";
import {apiService} from "../../services/api.service";
import styles from './Books.module.css'

const Books = () => {
    const [books, setBooks] = useState<IBook[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        apiService.bookService.getBooks()
            .then(value => setBooks(value))
            .finally(() => setIsLoading(false))
    }, []);

    return (
        <div>
            <img src="https://collegeinfogeek.com/wp-content/uploads/2018/11/Essential-Books.jpg"
                 alt="books" className={styles.mainImage}/>

            {isLoading && <div className="statusBlock"><ClipLoader size={50}/></div>}

            {!isLoading && books.length === 0 &&
                <p className="statusBlock">No books yet</p>}

            <div className={styles.bookBlock}>{books.map(book =>
                <div className={styles.innerBlock} key={book._id}>
                    <img
                        src={book.photo || "https://static.vecteezy.com/system/resources/thumbnails/002/219/582/small_2x/illustration-of-book-icon-free-vector.jpg"}
                        alt="book" className={styles.bookImage}/>
                    <h3 className={styles.bookName}>{book.name}</h3>
                    <p className={styles.bookAuthor}>{book.author?.name}</p>
                    <p className={styles.bookPrice}>{book.price} $</p>
                </div>)}
            </div>
        </div>
    );
};

export default Books;