import React from 'react';
import {useForm} from "react-hook-form";
import {ISearch} from "../../models/ISearch";
import {apiService} from "../../services/api.service";
import styles from './Search.module.css'

const Search = () => {

    const {register, handleSubmit} = useForm<ISearch>();

    const customHandler = (formData: ISearch) => {
        console.log(formData)
        apiService.bookService.searchBooks(formData).then()
    }

    return (
        <div className={styles.mainBlock}>
            <form className={styles.form} onSubmit={handleSubmit(customHandler)}>
                <input type="text" placeholder={'enter book title'} {...register('search')} className={styles.input}/>
                <button className={styles.button}>
                    <img src="https://img.icons8.com/ios7/600/search.png" alt="search icon" className={styles.icon}/>
                </button>
            </form>

        </div>
    );
};

export default Search;