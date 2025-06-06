import React, {FC} from 'react';
import {IPurchase} from "../../models/IPurchase";

type PropsType = {
    item: IPurchase
}

const CartItem: FC<PropsType> = ({item}) => {
    return (
        <div>
            <img src="https://bookclub.ua/images/db/goods/61455_122409.jpg" alt="book"/>
            <h3>{item.name}</h3>
            <p>{item.price} грн</p>
        </div>
    );
};

export default CartItem;