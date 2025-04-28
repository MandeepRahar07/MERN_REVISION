import logo from './logo.svg';
import './App.css';
import Product from './components/product';
import {Routes, Route} from 'react-router-dom'
import EditProduct from './components/editprocut';
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Product/>}>  </Route>
 <Route path='/edit/:id' element={<EditProduct/>}></Route>
    
     </Routes>
    
    </div>
  );
}

export default App;
