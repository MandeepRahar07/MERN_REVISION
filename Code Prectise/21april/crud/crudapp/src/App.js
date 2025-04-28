import logo from './logo.svg';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Class from './components/Class';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
 <Routes>
  <Route path='/class' element = {<Class/>}>Class Home page</Route>
 </Routes>
    </div>
  );
}

export default App;
