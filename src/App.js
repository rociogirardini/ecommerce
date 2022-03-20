import './App.css';
import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import PropGreeting from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <PropGreeting nombre="Ro" titulo="Cuadros" item="Foto Obse"/>
    </div>
  );
}

export default App;