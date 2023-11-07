import logo from './logo.svg';
import './App.css';
import SignupD from './components/Signup/Signup';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './components/Routes/AllRoutes';

function App() {
  return (
    <div className="App">
     <h1>tera fufa pahle hi suspend hoya hande hai</h1>
     {/* <SignupD/> */}

     {/* <Login/> */}
     <Navbar/>
     <AllRoutes/>

    </div>
  );
}

export default App;
