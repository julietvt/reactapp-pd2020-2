import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';

function App() {
  return (
    <>
      <Greeting name={'Vasya'} surname={'Ivanov'} />
      <Greeting name={'Masha'} surname={'Ivanova'} />
      <Greeting name={'Barsik'} surname={'Ivanovvvvvv'} />
    </>
  );
}

export default App;
