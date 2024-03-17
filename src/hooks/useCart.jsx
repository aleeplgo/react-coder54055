import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const useCart = ()=>{
    const cart = useContext(CartContext)
    if(cart === undefined){
    throw new Error("UseCart must be used within a CartProvider");
    }
    
    return cart; 
}