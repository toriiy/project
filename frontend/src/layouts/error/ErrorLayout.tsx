import React from 'react';
import styles from './ErrorLayout.module.css'

const ErrorLayout = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={styles.innerBlock}>
                <img
                    src="https://www.pngkit.com/png/detail/123-1232402_book-with-magnifying-glass-vector-search-books-icon.png"
                    alt="book" className={styles.image}/>
                <h2>404</h2>
                <h3>Page not found</h3>
            </div>
        </div>
    );
};

export default ErrorLayout;