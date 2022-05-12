import './App.css';
import Layout from './components/Layout';
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <Layout title={"Componentes de clases"} footer={"Soy el footer"}>
        <Home/>

      </Layout>
    </div>
  );
}

export default App;
