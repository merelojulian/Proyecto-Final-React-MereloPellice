import { createContext, useState, useContext } from "react";
import { CartContext } from "./CartContext";
import { toast } from "sonner";

export const CounterContext = createContext();

const CounterContextProvider = ({ children }) => {   
    const [counter, setCounter] = useState(0);       
    const { cart, addToCart, removeProduct } = useContext(CartContext);

    const onAdd = (item) => { 
        const cantidadEnCarrito = cart.find(product => product.id === item.id)?.quantity || 0;
        const cantidadTotal = cantidadEnCarrito + 1;

        if (cantidadTotal <= item.stock) {
            setCounter(prev => prev + 1);  
            let objetoParaElCarrito = { ...item, quantity: cantidadTotal };
            addToCart(objetoParaElCarrito);
            toast.success("Se agregó al carrito", { closeButton: true });
        } else {
            toast.error("Ya no queda Stock", { closeButton: true });
        }
    };

    const removeFromCart = (id) => {
        const productoEnCarrito = cart.find(product => product.id === id);

        if (productoEnCarrito) {
            removeProduct(productoEnCarrito);
            toast.warning("Producto eliminado del carrito", { closeButton: true });
        } else {
            toast.error("El producto no está en el carrito", { closeButton: true });
        }
    };

    return (
        <CounterContext.Provider value={{ counter, onAdd, removeFromCart }} >
            {children}
        </CounterContext.Provider>
    );
};

export default CounterContextProvider;
