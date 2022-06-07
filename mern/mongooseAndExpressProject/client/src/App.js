import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import FormCreationDojo from './views/FormCreationDojo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/crear-dojo' element={<FormCreationDojo />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
