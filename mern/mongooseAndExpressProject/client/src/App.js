import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import FormCreationDojo from './views/FormCreationDojo';
import FormAddInstructors from './views/FormAddInstructors';
import Home from './views/Home';
import Detail from './views/Detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/crear-dojo' element={<FormCreationDojo />} />
        <Route path='/editar-dojo/:id' element={<FormCreationDojo />} />
        <Route path='/agregar-instructores' element={<FormAddInstructors/>}/>
        <Route path='/dojos' element={<Home/>}/>
        <Route path='/dojos/:id' element={<Detail/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
