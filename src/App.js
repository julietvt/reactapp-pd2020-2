import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'anonymous',
    };
  }
  render() {
    const { username } = this.state;
    return <Greeting name={username} isGreeting={false} />;
  }
}
export default App;
