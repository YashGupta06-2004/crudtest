import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes , Route, HashRouter} from 'react-router-dom';
import Create from './Components/Create';
import Read from './Components/Read';
import Edit from './Components/Edit';

function App() {
  return (
    <HashRouter>
    <Routes>
    <Route path="/" element={<Create/>}/>
    <Route path="/read" element={<Read/>}/>
    <Route path = "/update" element={<Edit/>}/>
    </Routes>
  </HashRouter>
  );
}

export default App;
