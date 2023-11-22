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
{/* Add routes here for "/" for "ViewNotes" and "/addnote" for "AddNote" */}
     
    </div>
  );
};

export default MainRoutes;
