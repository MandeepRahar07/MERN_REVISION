
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Laptop from './components/Laptop';
import Navbar from './components/navbarr/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/laptop' element={<Laptop />}></Route>
      </Routes>
    </div>
  );
}

export default App;
