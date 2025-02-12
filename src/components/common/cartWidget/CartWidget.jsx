import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';


const CartWidget = () => {
    return (
        <div className="btn icon-cart" >
            <div className="cart">
                <Badge badgeContent={0} color='warning' showZero={true}>
                    <ShoppingCartIcon />
                </Badge>
            </div>
        </div >
    )
}

export default CartWidget;


