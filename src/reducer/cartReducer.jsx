
export const cartReducer = (state, action) => {
    switch (action.type) {

        case "ADD_TO_CART":

            const { id, color, quantity, singleProduct } = action.payload

            let existingProduct = state.cart.find((c) => c.id === id + color)

            if (existingProduct) {
                let updatedProduct = state.cart.map((currElem) => {

                    if (currElem.id === id + color) {
                        let newQuantity = currElem.quantity + quantity
                        if (newQuantity >= currElem.max) {
                            newQuantity = currElem.max
                        }
                        return {
                            ...currElem,
                            quantity: newQuantity
                        }
                    } else {
                        return currElem
                    }
                })
                return {
                    ...state,
                    cart: updatedProduct
                }

            } else {
                let cartProduct;

                cartProduct = {
                    name: singleProduct.name,
                    price: singleProduct.price,
                    max: singleProduct.stock,
                    image: singleProduct.image[0].url,
                    id: id + color,
                    color: color,
                    quantity: quantity
                }

                return {
                    ...state,
                    cart: [...state.cart, cartProduct]
                }
            }

        case "REMOVE_ITEM":
            return {
                ...state,
                cart: state.cart.filter((c) => c.id !== action.payload)
            }

        case "CLEAR_CART":
            return {
                ...state,
                cart: []
            }

        case "SET_INCREMENT":

            let newProduct = state.cart.map((currElem) => {
                if (currElem.id === action.payload) {

                    let incAmount = currElem.quantity + 1;
                    if (incAmount >= currElem.max) {
                        incAmount = currElem.max
                    }
                    return {
                        ...currElem,
                        quantity: incAmount
                    };
                } else {
                    return currElem;
                }
            });
            return {
                ...state,
                cart: newProduct // Return the updated cart array
            };


        case "SET_DECREMENT":
            let updatedProduct = state.cart.map((currElem) => {
                if (currElem.id === action.payload) {
                    let decAmount = currElem.quantity - 1;
                    if (decAmount <= 1) {
                        decAmount = 1
                    }
                    return {
                        ...currElem,
                        quantity: decAmount
                    };
                } else {
                    return currElem;
                }
            });
            return {
                ...state,
                cart: updatedProduct// Return the updated cart array
            };

        case "SET_TOTAL_ITEMS":

            let updatedItems = state.cart.reduce((initialVal, currVal) => {
                return initialVal + currVal.quantity
            }, 0)
            return {
                ...state,
                total_items: updatedItems
            }

        case "SET_TOTAL_PRICE":
            let total_price = state.cart.reduce((initialVal, currVal) => {
                return initialVal + (currVal.quantity * currVal.price)
            }, 0)
            return {
                ...state,
                total_price
            }

        default:
            return state
    }


}


