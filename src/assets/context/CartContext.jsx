import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {
    const[cartItems, setCartItems] = useState([]);
    const addCart= (pizza) => {
        const existeItem = cartItems.find((item) => item.id === pizza.id);
        if (existeItem){
            setCartItems(
                cartItems.map ((item)=>
                item.id === pizza.id ? {...item, count: item.count + 1}: item)
            )
        }
        else {
            setCartItems([...cartItems, {...pizza, count:1}])
        }
    }
    const removeCart= (pizza) => {
        const existeItem = cartItems.find((item) => item.id === pizza.id);
        if (existeItem.count === 1){
            setCartItems(
                cartItems.filter ((item)=> item.id != pizza.id
                )
            )
        }
        else {
            cartItems.map ((item)=>
                item.id === pizza.id ? {...item, count: item.count - 1} : item)
        }
    }

    const precioTotal= cartItems.reduce(
        (total, item)=> total + item.price * item.count, 0
    )
    const cantidadtotal = cartItems.reduce((total, item) => total + item.count, 0)

    return(
        <CartContext.Provider value={{cartItems, addCart, removeCart, precioTotal, cantidadtotal}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider
