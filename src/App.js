import Header from './components/Header';
import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <div>
      <Header name="ProgBR" links={["Home", "Sobre", "Contato", "Login", "API"]}></Header>
      <Counter count={1} ></Counter>
    </div>
  );
}

export default App;