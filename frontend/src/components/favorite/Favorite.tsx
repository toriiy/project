import React, {FC} from 'react';
import {IPurchase} from "../../models/IPurchase";
import styles from './Favorite.module.css'

type PropsType = {
    favorite: IPurchase
}
const Favorite: FC<PropsType> = ({favorite}) => {
    return (
        <div className={styles.itemBlock}>
            <img src="https://bookclub.ua/images/db/goods/61455_122409.jpg" alt="book" className={styles.image}/>
            <h3 className={styles.name}>{favorite.name}</h3>
            <p className={styles.price}>{favorite.price} $</p>
        </div>
    );
};

export default Favorite;