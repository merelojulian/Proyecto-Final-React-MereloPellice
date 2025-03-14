import { createContext, useState } from "react";
import { toast } from "sonner";

export const CartContext = createContext();



const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);


    // Agrega un producto al carrito

    const addToCart = (item) => {
        setCart(prevCart => {
            const isInCart = prevCart.find(product => product.id === item.id);

            if (isInCart) {
                return prevCart.map(product =>
                    product.id === item.id
                        ? { ...product, quantity: item.quantity }
                        : product
                );
            } else {
                return [...prevCart, item];
            }
        });
    };



    // Elimina una unidad del producto
    const removeProduct = (product) => {
        if (product.quantity > 1) {
            const nuevoArray = cart.map((elemento) => {
                if (elemento.id === product.id) {
                    return { ...elemento, quantity: elemento.quantity - 1 };
                } else {
                    return elemento;
                }
            });
            setCart(nuevoArray);
        } else {
            const nuevoArray = cart.filter((elemento) => elemento.id !== product.id);
            setCart(nuevoArray);
        }
    };

    // Elimina todas las unidades de ese producto
    const removeById = (id) => {
        const newArray = cart.filter((elemento) => elemento.id !== id);
        setCart(newArray);
        toast.warning("Producto eliminado del carrito", { closeButton: true });
    }

    // Elimina todos los productos del carrito
    const resetCart = () => {
        setCart([]);
    }

    const getTotalAmount = () => {
        let total = cart.reduce((acc, elemento) => {
            return acc + (elemento.quantity * elemento.price);
        }, 0)

        return total;
    }

    const getTotalQuantity = () => {
        let total = cart.reduce((acc, elemento) => {
            return acc + elemento.quantity;
        }, 0)
        return total;
    }


    return (
        <CartContext.Provider value={{ cart, addToCart, removeById, resetCart, getTotalAmount, getTotalQuantity, removeProduct }} >
            {children}
        </CartContext.Provider >
    )
}

export default CartContextProvider;

