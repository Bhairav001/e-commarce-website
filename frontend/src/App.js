import './App.css';
import Shop from './Pages/Shop';
import Shopcategory from './Pages/Shopcategory';
import Product from './Pages/Product';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes,Route}from "react-router-dom"
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
function App() {
  return (
    <div>
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/mens' element={<Shopcategory category="men"/>}/>
            <Route path='/womens' element={<Shopcategory category="womens"/>}/>
            <Route path='/kids' element={<Shopcategory category="kids"/>}/>
            <Route path='/product' element={<Product/>}>
               <Route path=':productId' element={<Product/>}/>
            </Route>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={<LoginSignup/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;