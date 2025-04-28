import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Product from './componet/CustomHook/Product';
import {useNavigate} from 'react-router-dom';
import DebounceSearch from './componet/CustomHook/SearchRes';
function App() {

  const navigate = useNavigate()

  return ( 
    <div className="App">
      <div>
        <button onClick={()=> navigate("/hook")}>Hook Example</button>
        <button onClick={()=> navigate("/search")}>Debouce Hook Example</button>
      </div>
      <Routes>
      
        <Route path = "/hook" element = {<Product/>}>
         <Route path = "/search" element = {<DebounceSearch/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
