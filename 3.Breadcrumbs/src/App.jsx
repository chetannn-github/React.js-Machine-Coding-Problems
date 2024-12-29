
import { Route, BrowserRouter as Router , Routes } from 'react-router-dom'
import './App.css'
import Products from './Pages/Products'
import ProductDetails from './Pages/ProductDetails'
import Breadcrumb from './Components/BreadCrumb'
import Home from './Pages/Home'

function App() {
  

  return (
    <Router>
      <div>
        <Breadcrumb/>
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/product" element={<Products/>}>
          <Route path="product-details" element={<ProductDetails />}/> 
        </Route>
        


      </Routes>
      </div>
      
     
    </Router>
  )
}

export default App
