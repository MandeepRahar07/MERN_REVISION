import logo from './logo.svg';
import './App.css';
import Products from './component/Products';
import AddProduct from './component/AddPeoduct';

function App() {
  return (
    <div className="App">
      <Products></Products>
      <AddProduct/>
    </div>
  );
}

export default App;
