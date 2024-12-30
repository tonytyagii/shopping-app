import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { items } from "./Data.jsx"
import Product from './Product.jsx'

const SearchItems = ({cart, setCart}) => {
  const { term } = useParams();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
     const filteredData = () => {
      const data = items.filter((product) => product.title.toLowerCase().includes(term.toLocaleLowerCase()));
      setFilterData(data);
     }

     filteredData();
  }, [term])
  

  

  
  return (
    <Product items = {filterData}/>
  )
}

export default SearchItems