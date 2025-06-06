import React, {useEffect, useState} from 'react';
import {apiService} from "../../services/api.service";
import {IPurchase} from "../../models/IPurchase";
import CartItem from "../cart-item/CartItem";

const Cart = () => {

    const [cart, setCart] = useState<IPurchase[]>([])

    useEffect(() => {
        apiService.purchaseService.getCart().then(value => setCart(value))
    }, []);

    return (
        <div>
            {cart.map(item => <CartItem item={item} key={item._id}/>)}
        </div>
    );
};

export default Cart;