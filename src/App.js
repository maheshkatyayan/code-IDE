import logo from './logo.svg';
import './App.css';
import Home from './home'
import Editorpage from './edditorpage'
import {BrowserRouter,Route,Routes} from "react-router-dom" //confusion doubt

function App() {
  
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      
      <BrowserRouter>
        <Routes>
        <Route 
         path="/" element={<Home />}
        ></Route>
          <Route  path="/editor/:roomid" element={<Editorpage/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
//:roomid dynamic generated
export default App;
