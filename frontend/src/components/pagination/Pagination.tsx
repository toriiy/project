import React from 'react';
import {useSearchParams} from "react-router-dom";
import styles from './Pagination.module.css'


const Pagination = () => {

    const [query, setQuery] = useSearchParams({page: '1'});

    const incrementPage = () => {
        const page = query.get('page');
        if (page && +page > 0) {
            let currentPage = +page
            currentPage++
            setQuery({page: currentPage.toString()})

        }
    }

    const decrementPage = () => {
        const page = query.get('page');
        if (page) {
            let currentPage = +page
            currentPage--
            setQuery({page: currentPage.toString()})
        }
    }

    return (
        <div className={styles.paginationBlock}>
            <button onClick={decrementPage} className={styles.button}>← Previous</button>
            <button onClick={incrementPage} className={styles.button}>Next →</button>
        </div>
    );
};

export default Pagination;