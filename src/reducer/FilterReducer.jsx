export const FilterReducer = (state, action) => {

    switch (action.type) {

        case "SET_FILTER_PRODUCTS":
            const allPrice=action.payload.map((currElem) => currElem.price)
            const maxPrice = allPrice.reduce((accumulator, currentValue) => {
                return Math.max(accumulator,currentValue);
            }, 0);
           
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters:{...state.filters,maxPrice,price: maxPrice}
            }
        case "SET_GRID_VIEW":
            return {
                ...state,
                grid_view: true
            }

        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view: false
            }

        case "GET_SORT_VALUES":
            return {
                ...state,
                sorting_product: action.payload
            }

        case "GET_SORT_PRODUCTS":
            let newSortData = [...action.payload];

            switch (state.sorting_product) {
                case "lowest":
                    newSortData.sort((a, b) => a.price - b.price);
                    break;
                case "highest":
                    newSortData.sort((a, b) => b.price - a.price);
                    break;
                case "z-a":
                    newSortData.sort((a, b) => b.name.localeCompare(a.name));
                    break;
                case "a-z":
                    newSortData.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                default:
                    
                    break;
            }

            return {
                ...state,
                filter_products: newSortData
            };

            case "FILTER_VALUE":
                const {name,value}=action.payload

                return {
                    ...state,
                    filters:{
                        ...state.filters, 
                        [name]:value
                    }     
                }
            
            
            case "FILTER_PRODUCTS":
                let {all_products}=state
                let tempFilteredData=[...all_products]
                
                const {text,category,company,color,price}=state.filters

                if(text){
                    tempFilteredData=tempFilteredData.filter((currElem) => {
                        return currElem.name.toLowerCase().includes(text)
                    })
                }

                if(category!=="All"){
                    tempFilteredData=tempFilteredData.filter((currElem) => {
                        return currElem.category===category
                    })
                }

                if(company!=="All"){
                    tempFilteredData=tempFilteredData.filter((currElem) => {
                        return currElem.company===company
                    })
                }

                if(color!=="All"){
                    tempFilteredData=tempFilteredData.filter((currElem) => {
                        return currElem.colors.includes(color)
                    })
                }

                if(price){
                    tempFilteredData=tempFilteredData.filter((currElem) => {
                        return currElem.price<=price
                    })
                }

                

                return {
                    ...state,
                    filter_products:tempFilteredData
                }

            case "REMOVE_FILTERS":
                return {
                    ...state,
                    filters:{
                        ...state.filters,        
                            text:"",
                            category:"All",
                            company:"All",
                            color:"All",
                            price:state.filters.maxPrice,
                            maxPrice:state.filters.maxPrice,
                            minPrice:state.filters.minPrice
                      
                    }
                }


        default:
            return state
    }
}