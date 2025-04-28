
import './App.css';
import Navbar from './component/nav/Navbar';
import {Route,Routes} from 'react-router-dom'
import State from './component/State';
import AddState from './component/AddState';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path='/state' element = {<State/>}></Route>
      <Route path='/addstate' element = {<AddState/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
