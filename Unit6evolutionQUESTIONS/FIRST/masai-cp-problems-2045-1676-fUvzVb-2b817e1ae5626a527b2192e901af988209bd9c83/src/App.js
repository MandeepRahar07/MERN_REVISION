import Navbar from "./Components/Navbar";
import MainRoutes from "./MainRoutes";

function App() {
  // DO NOT CHANGE/MODIFY this app-structure here
  return (
    <div data-testid="notes-app">
      <Navbar/>
      <MainRoutes/>
      {/* import and show Navbar and MainRoutes here */}     
    </div>
  );
}

export default App;
