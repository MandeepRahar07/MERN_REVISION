import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Products from './components/Product/Products';
import Navbar from './components/Homepage/Navbar';
import AddProduct from './components/Product/AddProduct';
import Cropdata from './components/Cropdata/Cropdata';
import Addcrop from './components/Cropdata/addcrop';
import Cropedit from './components/Cropdata/cropedit';
import Book from './components/book/Book';
import BookAdd from './components/book/BookAdd';
import BookEdit from './components/book/BookEdit';
import AddCropm from './components/NewCrud/AddCropm';
import Counter from './components/counterapp/Counter';
import TimerApp from './components/timerapp/TimerApp';
import Home from './components/redux/Home';

function App() {
  const navigate = useNavigate();

  const GotoProduct = () => {
    navigate("/product");
  };

  return (
    <div >
       <Navbar/>
      <Routes>
        <Route path='/product' element={<Products />} />
        <Route path='/addproduct' element= {<AddProduct/>}/>
        <Route path='/cropdata' element={<Cropdata/>}></Route>
        <Route path='/addcrop' element= {<Addcrop/>}></Route>
        <Route path='/editcrop/:id' element={<Cropedit/>}></Route>
        <Route path='/book' element = {<Book/>}></Route>
        <Route path='bookadd' element = {<BookAdd/>}></Route>
        <Route path='/book/:id' element = {<BookEdit/>}></Route>
        <Route path='/addcropm' element = {<AddCropm/>}></Route>
        <Route path='/counterapp' element = {<Counter/>}>Counter App</Route>
        <Route path='/timerapp' element = {<TimerApp/>}>Timer App</Route>
        <Route path = "/todo" element = {<Home/>}> Todo App with redux</Route>
      </Routes>
    </div>
  );
}

export default App;
