import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

const CartWidget = () => {
    const { getTotalQuantity } = useContext(CartContext);
    let total = getTotalQuantity(); 

    return (
        <div className="btn icon-cart">
            <div className="cart">
                <Badge badgeContent={total} color='warning' showZero={true}>
                    <ShoppingCartIcon />
                </Badge>
            </div>
        </div>
    );
}

export default CartWidget;



