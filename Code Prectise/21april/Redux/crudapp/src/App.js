import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Countery from './Compo/Countery';
import Navbar from './Compo/Navbar/Navbar';
function App() {
  return (
    <div className="App">
   <div>
    <Navbar/>
    <Routes>
<Route path='/country' element= {<Countery/>}>

</Route>
    </Routes>
   </div>
    </div>
  );
}

export default App;
