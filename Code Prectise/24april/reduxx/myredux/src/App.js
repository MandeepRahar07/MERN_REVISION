import logo from './logo.svg';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Bottel from './components/Bottel';
import AddBottel from './components/AddBottel';
import Counter from './components/Counter';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <button onClick={()=> navigate('/add')}>Add Bottel</button>
      <button onClick={()=> navigate('/count')}>Counter App</button>
     <div>
      <Routes>
        <Route path = "/" element = {<Bottel/>}></Route>
        <Route path='/add' element ={<AddBottel/>}></Route>
        <Route path='/count' element = {<Counter/>}></Route>
      </Routes>
     </div>
    </div>
  );
}

export default App;
