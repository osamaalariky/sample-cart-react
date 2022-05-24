import React, { Component } from 'react';
import CartCounting from './cartCounting';

class Cart extends Component {
    state = {  } 
    render() { 
        console.log("cart - Rendered");
        const { onRestarting, onDeleting, onAdding, onRemoving, counting} = this.props;
        return (
            <div>
            <button
            onClick={ onRestarting}
            className='btn btn-primary btn-sm m-2'
            >Remove all Products</button>
            {this.props.cart.map(counting => (
            <CartCounting 
            key={counting.id}
            onDeleting={onDeleting} 
            onAdding={onAdding}
            onRemoving={onRemoving}
            counting={counting}>

            <h4>product: {counting.name}</h4>
            <h6>price: {counting.price}</h6>

            </CartCounting>))}
        </div>
        );
    }
}
 
export default Cart;