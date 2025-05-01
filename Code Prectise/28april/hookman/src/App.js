
import './App.css';
import Navbar from './component/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom'
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
import Accordian from './component/Day3/Accordian';
import Stopwatch from './component/day4/Stopwatch';
import CustomDropdown from './component/Day5/CustomDropdown';
import Short from './component/Day5/Short';
import Theme from './component/Day5/Theme';
import DynamicForm from './component/Day5/DynamicForm';
import DragAndDropList from './component/Day6/DragAndDropList';
import Table from './component/Day6/Table';
import Carousel from './component/Day6/Carousel';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/counterapp" element={<CounterApp />}>
        </Route>
        <Route path='/showhidepassword' element={<ShowHidePassword />}>Show Hide Password</Route>
        <Route path='/todo' element={<Todo />}>Todo List</Route>
        <Route path='/addtodo' element={<AddTodo />}>Add Todo Item</Route>
        <Route path='/signup' element={<Signup />}> Sign Up </Route>
        <Route path='/login' element={<Login />}> Log In </Route>
        <Route path='/search' element={<Search />}>Search Item</Route>
        <Route path='/form' element={<MultiStepForm />}> MultiStepForm</Route>
        <Route path='/form1' element={<MainForm />}>MultiStepForm 2</Route>
        <Route path='/pagination' element={<Pagination />}> Pagination Functionality</Route>
        <Route path="/modal" element={<ModalOpen />}> Modal</Route>
        <Route path='/image' element={<ImageGalary />}>image slide</Route>
        <Route path='/accordian' element={<Accordian />}> accordian </Route>
        <Route path='/stopwatch' element={<Stopwatch />}> Watch</Route>
        <Route path='/drop' element={<CustomDropdown />}>Drop Down</Route>
        <Route path='/sort' element={<Short />}>Drop Down</Route>
        <Route path='/theme' element={<Theme />}> Theme</Route>
        <Route path='/dynemicform' element={<DynamicForm />}> Dynemic Form</Route>
        <Route path='/dragreport' element={<DragAndDropList />}>Drag</Route>
        <Route path='/table' element={<Table />}> Sort Table</Route>
        <Route path='/crousal' element={<Carousel />}> Carousel</Route>
      </Routes>
    </div>
  );
}

export default App;
