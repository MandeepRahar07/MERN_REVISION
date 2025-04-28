import logo from './logo.svg';
import './App.css';
import { Router, Route, Routes } from 'react-router-dom';
import Product from './product/product';
import ProductDetails from './productDetails/ProductDetails'
import ProductEdit from './productedit/ProductEdit';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Product />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/productedit/:id' element={<ProductEdit />}></Route>
      </Routes>

    </div>
  );
}

export default App;
