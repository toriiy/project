import React, {useEffect, useState} from 'react';
import {ClipLoader} from "react-spinners";
import {IPurchase} from "../../models/IPurchase";
import {apiService} from "../../services/api.service";
import Favorite from "../favorite/Favorite";
import styles from './Favorites.module.css'

const Favorites = () => {

    const [favorites, setFavorites] = useState<IPurchase[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        apiService.purchaseService.getFavorites()
            .then(value => setFavorites(value))
            .finally(() => setIsLoading(false))
    }, []);

    return (
        <div>
            {isLoading && <div className="statusBlock"><ClipLoader size={50}/></div>}

            {!isLoading && favorites.length === 0 &&
                <p className="statusBlock">No favorite items yet</p>}

            <div className={styles.favoritesBlock}>
                {favorites.map(favorite => <Favorite favorite={favorite} key={favorite._id}/>)}
            </div>
        </div>
    );
};

export default Favorites;