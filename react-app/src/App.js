import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button 
        size="large"
        onClick={()=>alert('hello')}
        variant="outlined"
        color="secondary">
        Welcome Johan
        </Button>
        <p>React app</p>
      </header>
    </div>
  );
}

export default App;
