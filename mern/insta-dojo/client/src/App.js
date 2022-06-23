import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import FormPost from './views/FormPost';
import Home from './views/Home';
import Login from './views/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='crear-post' element={<FormPost/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
