import React from 'react';
import {useForm} from "react-hook-form";
import {ISearch} from "../../models/ISearch";
import {apiService} from "../../services/api.service";

const Search = () => {

    const {register, handleSubmit} = useForm<ISearch>();

    const customHandler = (formData: ISearch) => {
        console.log(formData)
        apiService.bookService.searchBooks(formData).then()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <input type="text" placeholder={'введіть назву книги'} {...register('search')}/>
                <button>
                    <img src="https://img.icons8.com/ios7/600/search.png" alt="search icon"/>
                </button>
            </form>

        </div>
    );
};

export default Search;