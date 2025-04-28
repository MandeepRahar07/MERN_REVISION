import logo from './logo.svg';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Pen from './components/Pen';
import AddPen from './components/AddPen';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
       <div>
      <button onClick={()=> navigate('/add')}>Add the product</button>
    </div>
     <Routes>
      <Route path='/' element = {<Pen/>}></Route>
      <Route path='/add' element= {<AddPen/>}></Route>
     </Routes>
 
    </div>
  );
}

export default App;
