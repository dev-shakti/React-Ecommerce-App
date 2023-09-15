import { useState } from "react";
import { useFilterContext } from "../../context/FilterContext"
import "./Sidebar.scss"
import CheckIcon from '@mui/icons-material/Check';
import FormatPrice from "../../Helpers/FormatPrice";

const Sidebar = () => {

  const {
    updateFilterValue,
    filters: { text, category, company, color, maxPrice, minPrice, price },
    all_products,
    clearFilter
  } = useFilterContext()


  //to get unique data of each field
  const getUniqueData = (data, property) => {

    let newVal = data.map((currElem) => {
      return currElem[property]
    })
    if (property === "colors") {
      return (newVal = ["All", ...new Set(newVal.flat())])

    }
    return (newVal = ["All", ...new Set(newVal)])

  }

  //to get unique data
  const categoryOnlyData = getUniqueData(all_products, "category")
  const companyOnlyData = getUniqueData(all_products, "company")
  const colorsData = getUniqueData(all_products, "colors")




  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text"
          name="text"
          value={text}
          placeholder="SEARCH"
          className="searchInput"
          onChange={updateFilterValue}
        />
      </form>
      <h2>Categoty</h2>
      <div className="cats">
        {
          categoryOnlyData.map((data, index) => {
            return <button className="btn-category"
              onClick={updateFilterValue}
              type="button"
              key={index}
              name="category"
              value={data}
            >{data}</button>
          })
        }
      </div>
      <div className="company-cat">
        <h2>Company</h2>
        <select id="company" name="company" onClick={updateFilterValue}>
          {
            companyOnlyData.map((currElem, index) => {
              return <option
                value={currElem}
                name="company"
                key={index}

              >{currElem}</option>
            })
          }
        </select>
      </div>
      <div className="filter-colors">
        <h2>Colors</h2>
        <div className="filter-color">
          {
            colorsData.map((currColors, index) => {
              if (currColors === "All") {
                return <button
                  key={index}
                  type="button"
                  name="color"
                  value={currColors}
                  className="allBtn"
                >All</button>
              }
              return <button onClick={updateFilterValue}
                key={index}
                type="button"
                name="color"
                value={currColors}
                className={color === currColors ? "color-btn active" : "color-btn"}
                style={{ backgroundColor: currColors }}
              >{color === currColors ? <CheckIcon /> : ""}</button>
            })
          }
        </div>

      </div>

      <h2>Price</h2>
      <div className="filterItem">
        <span>0</span>
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          className="rangeInput"
          name="price"
          value={price}
          onChange={updateFilterValue}
        />
        <span><FormatPrice price={price} /></span>
      </div>
      <button onClick={clearFilter}
        className="filter-btn">
        REMOVE FILTER
      </button>
    </>
  )
}

export default Sidebar
