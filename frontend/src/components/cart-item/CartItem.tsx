import React, {FC} from 'react';
import {IPurchase} from "../../models/IPurchase";
import styles from './CartItem.module.css'

type PropsType = {
    item: IPurchase
}

const CartItem: FC<PropsType> = ({item}) => {
    return (
        <div className={styles.itemBlock}>
            <img src="https://bookclub.ua/images/db/goods/61455_122409.jpg" alt="book" className={styles.image}/>
            <h3 className={styles.name}>{item.name}</h3>
            <p className={styles.price}>{item.price} UAH</p>
        </div>
    );
};

export default CartItem;