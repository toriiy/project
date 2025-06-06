import React, {useEffect, useState} from 'react';
import {IPurchase} from "../../models/IPurchase";
import {apiService} from "../../services/api.service";
import Favorite from "../favorite/Favorite";

const Favorites = () => {

    const [favorites, setFavorites] = useState<IPurchase[]>([])

    useEffect(() => {
        apiService.purchaseService.getFavorites().then(value => setFavorites(value))
    }, []);

    return (
        <div>
            {favorites.map(favorite => <Favorite favorite={favorite} key={favorite._id}/>)}
        </div>
    );
};

export default Favorites;