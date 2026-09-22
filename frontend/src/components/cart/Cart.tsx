import React, {useEffect, useState} from 'react';
import {ClipLoader} from "react-spinners";
import {apiService} from "../../services/api.service";
import {IPurchase} from "../../models/IPurchase";
import CartItem from "../cart-item/CartItem";
import styles from './Cart.module.css'

const Cart = () => {

    const [cart, setCart] = useState<IPurchase[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        apiService.purchaseService.getCart()
            .then(value => setCart(value))
            .finally(() => setIsLoading(false))
    }, []);

    return (
        <div>
            {isLoading && <div className="statusBlock"><ClipLoader size={50}/></div>}

            {!isLoading && cart.length === 0 &&
                <p className="statusBlock">Your cart is empty</p>}

            <div className={styles.cartBlock}>
                {cart.map(item => <CartItem item={item} key={item._id}/>)}
            </div>
        </div>
    );
};

export default Cart;