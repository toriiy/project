import React, {useEffect, useState} from 'react';
import {IBook} from "../../models/IBook";
import {apiService} from "../../services/api.service";
import styles from './Books.module.css'

const Books = () => {
    const [books, setBooks] = useState<IBook[]>([])

    useEffect(() => {
        apiService.bookService.getBooks().then(value => setBooks(value))
    }, []);

    return (
        <div>
            <img src="https://collegeinfogeek.com/wp-content/uploads/2018/11/Essential-Books.jpg"
                 alt="books" className={styles.mainImage}/>

            <div className={styles.bookBlock}>{books.map(book =>
                <div className={styles.innerBlock}>
                    <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/002/219/582/small_2x/illustration-of-book-icon-free-vector.jpg"
                        alt="book" className={styles.bookImage}/>
                    <h3>{book.name}</h3>
                    <p>{book.author}</p>
                    <p><b>{book.price} грн</b></p>
                </div>)}
            </div>
        </div>
    );
};

export default Books;