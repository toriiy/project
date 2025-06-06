import React, {FC} from 'react';
import {IPurchase} from "../../models/IPurchase";

type PropsType = {
    favorite: IPurchase
}
const Favorite: FC<PropsType> = ({favorite}) => {
    return (
        <div>
            <img src="https://bookclub.ua/images/db/goods/61455_122409.jpg" alt="book"/>
            <h3>{favorite.name}</h3>
            <p>{favorite.price}</p>
        </div>
    );
};

export default Favorite;