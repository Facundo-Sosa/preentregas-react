import './App.css';
import NavBar from './components/NavBar'
import MainRemeras from './paginas/RemeraListContainer'
import MainPantalones from './paginas/PantalonesListContainer'
import MainAccesorios from './paginas/AccesoriosListContainer'
import MainPrincipal from './paginas/MainPrincipal'
import MainItemDetalle from "./paginas/ItemDetalle"
import Footer from './components/Footer.js'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Contador from "./components/Contador.js"
import 'boxicons';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPrincipal />} />        
        <Route path="/remeras" element={<MainRemeras />} />
        <Route path="/pantalones" element={<MainPantalones />} />        
        <Route path="/accesorios" element={<MainAccesorios />} /> 
        <Route path="/item/:id" element={< MainItemDetalle />} />      
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
