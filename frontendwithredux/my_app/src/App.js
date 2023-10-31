
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Product from './components/Product/Product';
import ProductAdd from './components/Product/ProductAdd';
import AllRoutes from './components/Routes/AllRoutes';

function App() {
  return (
    <div className="App">
     <h1>hlooo</h1>
     {/* <ProductAdd></ProductAdd>
     <Product></Product> */}
     <Navbar></Navbar>
     <AllRoutes></AllRoutes>
    </div>
  );
}

export default App;
