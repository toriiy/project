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
            <img src="https://d3525k1ryd2155.cloudfront.net/i/en20/homepage-slides/sci-fi-2025-s-1150w.jpg"
                 alt="books" className={styles.mainImage}/>
            <div className={styles.bookBlock}>{books.map(book =>
                <div className={styles.innerBlock}>
                    <img
                        src="https://bookclub.ua/images/db/goods/61455_122409.jpg"
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