
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Phone } from './component/Phone';
import AddPhone from './component/AddPhone';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <div>
        <button onClick={()=> navigate('/add')}>Add New Phone</button>
      </div>
   <Routes>
    <Route path='/' element= {<Phone/>}></Route>
    <Route path='/add' element={<AddPhone/>}></Route>
   </Routes>
    </div>
  );
}

export default App;
