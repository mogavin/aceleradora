import logo from './logo.svg';
import ListaMusicas from './components/ListaMusicas'
import musicas from './data/musicas'
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ListaMusicas musicas={musicas} />
      </header>
    </div>
  );
}

export default App;
