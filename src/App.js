import './App.css';
import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer nombre="Ro" titulo="Todos los productos"/>
    </div>
  );
}

export default App;