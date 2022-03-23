import './App.css';
import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ItemListContainer from './components/ItemListContainer';
import ItemList from './components/ItemList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer nombre="Ro" titulo="Todos los productos" item="Foto Obse"/>
      <ItemList />
    </div>
  );
}

export default App;