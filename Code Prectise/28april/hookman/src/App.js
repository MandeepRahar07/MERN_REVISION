
import './App.css';
import Navbar from './component/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom'
import CounterApp from './component/Day1/CounterApp';
import ShowHidePassword from './component/Day1/ShowHidePassword';
import Todo from './component/Day1/Todo';
import AddTodo from './component/Day1/AddTodo';
import Signup from './component/Day2/Signup';
import Login from './component/Day2/Login';
import Search from './component/Day2/Search';
import MultiStepForm from './component/Day2/Form/Personal';
import MainForm from './component/Day2/Form2/MainForm';
import Pagination from './component/Day3/Pagination';
import ModalOpen from './component/Day3/ModalOpen';
import ImageGalary from './component/Day3/ImageGalary';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path= "/counterapp" element = {<CounterApp/>}>
      </Route>
      <Route  path='/showhidepassword' element= {<ShowHidePassword/>}>Show Hide Password</Route>
      <Route path='/todo' element = {<Todo/>}>Todo List</Route>
      <Route path='/addtodo' element = {<AddTodo/>}>Add Todo Item</Route>
      <Route path='/signup' element = {<Signup/>}> Sign Up </Route>
      <Route path='/login' element = {<Login/>}> Log In </Route>
      <Route path='/search' element = {<Search/>}>Search Item</Route>
      <Route path='/form' element = {<MultiStepForm/>}> MultiStepForm</Route>
      <Route  path='/form1' element = {<MainForm/>}>MultiStepForm 2</Route>
      <Route path='/pagination' element = {<Pagination/>}> Pagination Functionality</Route>
      <Route path = "/modal" element={<ModalOpen/>}> Modal</Route>
      <Route path='/image' element = {<ImageGalary/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
