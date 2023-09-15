import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { FilterContextProvider } from './context/FilterContext.jsx'
import { ProductContextProvider } from './context/ProductContext.jsx'
import { CartContextProvider } from './context/cartContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductContextProvider>
     <FilterContextProvider>
      <CartContextProvider>
      <App />
      </CartContextProvider>
   
     </FilterContextProvider>
    </ProductContextProvider> 
  </React.StrictMode>,
)
