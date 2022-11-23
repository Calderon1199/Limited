import Button from '../button/button';
import { useNavigate } from 'react-router-dom';
import CartItem from '../cart-item/cart-item';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';
import './cart-dropdown.scss';


const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    };


    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) => (<CartItem key={item.id} cartItem={item} />))}
            </div>
            <Button onClick={goToCheckoutHandler}>Checkout</Button>
        </div>
    )
};

export default CartDropdown;