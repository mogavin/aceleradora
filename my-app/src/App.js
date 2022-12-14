import logo from './logo.svg';
import './App.css';
import ListaFilmes from './components/ListaFilmes';


function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <ListaFilmes/>
      </header>
    </div>
  );
}

export default App;