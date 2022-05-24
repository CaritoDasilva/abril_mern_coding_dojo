import React, { useState } from 'react';
import './App.css';
import Register from './views/Register';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './views/Home';

function App() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    confirmPasword: '',
    age: ''
  })

  return (
    <div className="App">
      <h1>{user?.username !== '' ? `Bienvenido ${user.username}` : 'Ingresa tus datos'}</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register setUser={setUser} />}/>
          <Route path="/home" element={<Home />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
