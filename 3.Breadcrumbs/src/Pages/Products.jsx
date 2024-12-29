import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <div>
        <Link to={"/product/product-details"}>Products</Link>
    </div>
  )
}

export default Products