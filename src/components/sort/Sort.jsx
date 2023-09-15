import "./Sort.scss"
import ViewListIcon from '@mui/icons-material/ViewList';
import GridViewIcon from '@mui/icons-material/GridView';
import { useFilterContext } from "../../context/FilterContext";
import { useState } from "react";
const Sort = () => {

  const { 
    grid_view, 
    setListView, 
    setGridView,
    filter_products, 
    sorting} = useFilterContext();
  
  return (
    <>
      <div className="side">
        <div className={!grid_view ? "icons active" : "icons"}
         onClick={setListView }
         >
          <ViewListIcon />
        </div>
        <div className={grid_view ? "icons active" : "icons"}
        onClick={setGridView }
         >
          <GridViewIcon />
        </div>
      </div>
      <div className="products">{filter_products.length} Products available</div>
      <form >
        <select id="dropdown" name="dropdown" onChange={(e) => sorting(e.target.value)}>
          <option value="a-z">Price(a-z)</option>
          <option value="" disabled></option>
          <option value="z-a">Price(z-a)</option>
          <option value="" disabled></option>
          <option value="lowest">Price(lowest)</option>
          <option value="" disabled></option>
          <option value="highest">Price(highest)</option>
        </select>
      </form>
    </>
  )
}

export default Sort
