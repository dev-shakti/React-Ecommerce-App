import { useReducer,createContext, useEffect } from "react";
import { ProductReducer } from "../reducer/ProductReducer";


const initialState={
    isLoading:false,
    isError:false,
    products:[],
    featuredProducts:[],
    singleProduct:{},
    isSingleLoading:false
}


const apiUrl="https://api.pujakaitem.com/api/products";
 
export const ProductContext=createContext();

export const ProductContextProvider = ({children}) => {

   const [state,dispatch]=useReducer(ProductReducer,initialState)
   
   //fetching all product data
   const fetchApi= async(url) => {
    
    dispatch({
        type:"SET_API_LOADING"
       })

    try{
        const res=await fetch(url);
        const products=await res.json();
        dispatch({
        type:"API-DATA",
        payload:products
      })

    }catch(err){
       dispatch({
        type:"API_ERROR"
       })
    }
      
      
   }

   //fetching single product data
   const getSingleProduct= async(url) => {
    
    dispatch({
        type:"SET_SINGLE_LOADING"
       })

    try{
        const res=await fetch(url)
        const singleProduct=await res.json()
        dispatch({
        type:"SET_SINGLE_PRODUCT",
        payload: singleProduct
      })

    }catch(err){
       dispatch({
        type:"SET_SINGLE_ERROR"
       })
    }
      
      
   }
   
   useEffect(() => {
    fetchApi(apiUrl)
   },[])

    return <ProductContext.Provider value={{...state, getSingleProduct}}>
        {children}</ProductContext.Provider>
}
