import { Routes,Route } from "react-router-dom";
import { ViewNotes } from "./Pages/ViewNotes";
import { AddNote } from "./Pages/AddNote";


const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element= {<ViewNotes/>}>
           
        </Route>
        <Route path= '/addnote' element = {<AddNote/>}/>
      </Routes>

     
    </div>
  );
};

export default MainRoutes;
