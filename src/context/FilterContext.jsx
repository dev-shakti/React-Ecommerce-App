import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { FilterReducer } from "../reducer/FilterReducer";
import { ProductContext } from "./ProductContext";


const initialState= {
    filter_products:[],
    all_products:[],
    grid_view:false,
    sorting_product:"lowest",
    filters:{
        text:"",
        category:"All",
        company:"All",
        color:"All",
        price:0,
        maxPrice:0,
        minPrice:0

    }
}

export const FilterContext=createContext();

export const FilterContextProvider = ({children}) => {

    const {products}=useContext(ProductContext);
   
    const [state,dispatch]=useReducer(FilterReducer,initialState)
   
    //to set the grid view in products page
    const setGridView = () => {
        dispatch({type:"SET_GRID_VIEW"})
    }
    
    //to set the List view in products page
    const setListView = () => {
        dispatch({type:"SET_LIST_VIEW"})
    }
    //sorting function
    const sorting = (value) => {
            dispatch({type:"GET_SORT_VALUES",payload:value})
    }

   
    const updateFilterValue = (e) => {
       const name=e.target.name
       const value=e.target.value
       
      dispatch({
        type:"FILTER_VALUE",
        payload:{name,value}
       })
    }
    
    //clear filter
    const clearFilter = () => {
         dispatch({type:"REMOVE_FILTERS"})
    }

    //this useeffect runs only when sort by name and price
    useEffect(() => {
        dispatch({ type: "GET_SORT_PRODUCTS", payload: products });
    }, [state.sorting_product]);


    //this useeffect for filter products
    useEffect(() => {
          dispatch({ type: "FILTER_PRODUCTS" });
    }, [state.filters]);
    

     //to call the products in products page
     useEffect(() => {       
        dispatch({
            type:"SET_FILTER_PRODUCTS",
            payload:products,
        })
    },[products])

    return <FilterContext.Provider 

    value={
        {...state,
        setGridView, 
        setListView,
        sorting,
        updateFilterValue,
        clearFilter
        }}>

        {children}

        </FilterContext.Provider>
}

export const useFilterContext = () => {
    return useContext(FilterContext);
}