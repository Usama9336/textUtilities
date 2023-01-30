import logo from './logo.svg';
import './App.css';

function App() {
  return (
    //jsx part approx same as html
    <>
    <h1>HELLUAJAH</h1>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </>//used to include more than one tag to return in this function
  );
}

export default App;
