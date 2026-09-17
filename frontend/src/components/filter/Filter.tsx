import React from 'react';
import styles from './Filter.module.css'
import {useForm} from "react-hook-form";
import {IFilter} from "../../models/IFilter";

const Filter = () => {

    const {register, handleSubmit} = useForm<IFilter>();

    const customHandler = (formData: IFilter) => {
        console.log(formData)
    }

    return (
        <div className={styles.mainBlock}>
            <h2>Choose a book to your taste:</h2>
            <form className={styles.formContainer} onSubmit={handleSubmit(customHandler)}>
                <div className={styles.innerDiv}>
                    <select className={styles.options} {...register('author')}>
                        <option value={''}>Choose an author</option>
                        <option value={'Agatha Christie'}>Agatha Christie</option>
                        <option value={'Tess Gerritsen'}>Tess Gerritsen</option>
                        <option value={'Sarah J. Maas'}>Sarah J. Maas</option>
                        <option value={'Holly Black'}>Holly Black</option>
                        <option value={'Annette Marie'}>Annette Marie</option>
                    </select>

                    <select className={styles.options} {...register('publisher')}>
                        <option value={''}>Choose a publisher</option>
                        <option value={'KSD'}>KSD</option>
                        <option value={'Vivat'}>Vivat</option>
                        <option value={'Ranok'}>Ranok</option>
                        <option value={'Nebo'}>Nebo</option>
                        <option value={'Bookchef'}>Bookchef</option>
                    </select>
                </div>

                <div className={styles.innerDiv}>
                    <select className={styles.options} {...register('category')}>
                        <option value={''}>Choose a category</option>
                        <option value={'Historical Literature'}>Historical Literature</option>
                        <option value={'Fiction Literature'}>Fiction Literature</option>
                        <option value={'Educational Literature'}>Educational Literature</option>
                    </select>

                    <select className={styles.options} {...register('genre')}>
                        <option value={''}>Choose a genre (for fiction literature)</option>
                        <option value={'Fantasy'}>Fantasy</option>
                        <option value={'Science Fiction'}>Science Fiction</option>
                        <option value={'Thriller'}>Thriller</option>
                        <option value={'Romance'}>Romance</option>
                        <option value={'Detective'}>Detective</option>
                    </select>
                </div>

                <button className={styles.sendButton}>Filter</button>
            </form>
        </div>
    );
};

export default Filter;