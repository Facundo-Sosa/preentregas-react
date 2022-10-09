import './App.css';
import NavBar from './components/NavBar'
import Main from './components/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main 
        mensaje='Este es el Item list'
      />
    </div>
  );
}

export default App;
