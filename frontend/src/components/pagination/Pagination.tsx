import React from 'react';
import {useSearchParams} from "react-router-dom";


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
        <div>
            <button onClick={decrementPage}>Попередня сторінка</button>
            <button onClick={incrementPage}>Наступна сторінка</button>
        </div>
    );
};

export default Pagination;