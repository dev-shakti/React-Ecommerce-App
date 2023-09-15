import { useParams } from "react-router-dom"
import Grid from "../../components/grid/Grid"
import "./Products.scss"
import { useState } from "react"
import Sidebar from "../../components/sidebar/Sidebar"
import { useFilterContext } from "../../context/FilterContext"
import List from "../../components/list/List"
import Sort from "../../components/sort/Sort"


const Products = () => {

  const { grid_view } = useFilterContext()
  return (
    <div className="products">
      <div className="left">
        <Sidebar />
      </div>
      <div className="right">
        <div className="top">
          <Sort/>
        </div>
        <div className="bottom">
          {
            grid_view === true ? <Grid /> : <List />
          }
        </div>
      </div>
    </div>
  )
}

export default Products
