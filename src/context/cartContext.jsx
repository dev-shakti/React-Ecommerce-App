import { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";


const getCartList = () => {
    let localCartData = localStorage.getItem("list")
    if (localCartData.length===0) {
        return []
    } else {
        return JSON.parse(localCartData)
    }
}

const initial_state = {
    cart:getCartList(),
    total_price: "",
    total_items: "",
    shipping_fee: 50000
}

export const cartContext = createContext();

export const CartContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, initial_state)

    // to add products to the cart
    const addToCart = (id, color, singleProduct, quantity) => {
        
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                id, color, singleProduct, quantity
            }
        })
    }

    // to remove products from the cart
    const removeItem = (id) => {
        dispatch({
            type: "REMOVE_ITEM",
            payload: id
        })
    }

    // to clear products from the cart
    const clearCart = () => {
        dispatch({
            type: "CLEAR_CART"
        })
    }
    
    // increment and decrement functions
    const increment = (index) => {
        dispatch({ type: "SET_INCREMENT",payload:index})
     
    }

    const decrement = (index) => {
        dispatch({ type: "SET_DECREMENT",payload:index })
    }

    //to set total items and total price and storing local data using useeffect

    useEffect(() => {
        dispatch({
            type:"SET_TOTAL_ITEMS"
        })
        dispatch({
            type:"SET_TOTAL_PRICE"
        })
        localStorage.setItem("list", JSON.stringify(state.cart))
    }, [state.cart])


    return <cartContext.Provider
        value={{
            ...state,
            addToCart,
            removeItem,
            clearCart,
            increment,
            decrement
        }}>
        {children}
    </cartContext.Provider>
}

export const useCartContext = () => {
    return useContext(cartContext)
}