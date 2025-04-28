
import './App.css';
import Navbar from './component/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom'
import CounterApp from './component/Day1/CounterApp';
import ShowHidePassword from './component/Day1/ShowHidePassword';
import Todo from './component/Day1/Todo';
import AddTodo from './component/Day1/AddTodo';
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
     </Routes>
    </div>
  );
}

export default App;
