
import { useContext } from 'react';
import './App.css';
// import Product from './components/Products';
import  { ThemeApp } from './context/ContextApi';
// import Count from './components/Count';
// import ReduxProduct from './components/ReduxProduct';
// import AddRedux from './components/AddRedux';

// import RouteALL from './components/Routes';
// import ThunkProduct from './thunk/components/product';
// import ThunkAdd from './thunk/components/ThunkAdd';
// import RouteThunk from './thunk/components/RouteThunk';
import Mandy from './component2/mandy';
import AudioPlayer from './component2/Audio';
// import ThunkProduct from './thunk/components/Product';


function App() {
  const{theme,toggleTheme}= useContext(ThemeApp)
  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff' }}>
      <button onClick={toggleTheme}>Theme Change</button>
      {/* <Product/>
      <Count></Count> */}
      {/* <AddRedux/>
      <ReduxProduct/> */}
      {/* <RouteALL/> */}
      {/* <RouteThunk/>
      <ThunkProduct/>
      <ThunkAdd></ThunkAdd> */}
      {/* <Mandy/> */}
      <AudioPlayer/>
    </div>
  );
}
export default App;
