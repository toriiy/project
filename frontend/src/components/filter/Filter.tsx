import React, {useEffect, useState} from 'react';
import styles from './Filter.module.css'
import {useForm} from "react-hook-form";
import {IFilter} from "../../models/IFilter";
import {apiService} from "../../services/api.service";
import {IAuthor} from "../../models/IAuthor";
import {IPublisher} from "../../models/IPublisher";
import {IGenre} from "../../models/IGenre";
import {ICategory} from "../../models/ICategory";

const Filter = () => {

    const {register, handleSubmit} = useForm<IFilter>();

    const [authors, setAuthors] = useState<IAuthor[]>([]);
    const [publishers, setPublishers] = useState<IPublisher[]>([]);
    const [genres, setGenres] = useState<IGenre[]>([]);
    const [categories, setCategories] = useState<ICategory[]>([]);

    useEffect(() => {
        Promise.all([
            apiService.authorService.getAuthors(),
            apiService.publisherService.getPublishers(),
            apiService.genreService.getGenres(),
            apiService.categoryService.getCategories(),
        ])
            .then(([authors, publishers, genres, categories]) => {
                setAuthors(authors);
                setPublishers(publishers);
                setGenres(genres);
                setCategories(categories);
            })
            .catch(e => console.error('Failed to load filter options', e));
    }, []);

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
                        {authors.map(author =>
                            <option value={author._id} key={author._id}>{author.name}</option>)}
                    </select>

                    <select className={styles.options} {...register('publisher')}>
                        <option value={''}>Choose a publisher</option>
                        {publishers.map(publisher =>
                            <option value={publisher._id} key={publisher._id}>{publisher.name}</option>)}
                    </select>
                </div>

                <div className={styles.innerDiv}>
                    <select className={styles.options} {...register('category')}>
                        <option value={''}>Choose a category</option>
                        {categories.map(category =>
                            <option value={category._id} key={category._id}>{category.name}</option>)}
                    </select>

                    <select className={styles.options} {...register('genre')}>
                        <option value={''}>Choose a genre (for fiction literature)</option>
                        {genres.map(genre =>
                            <option value={genre._id} key={genre._id}>{genre.name}</option>)}
                    </select>
                </div>

                <button className={styles.sendButton}>Filter</button>
            </form>
        </div>
    );
};

export default Filter;