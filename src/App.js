// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
// import Home from './Components/Home';
import Content1 from './Components/Content1';
import Content2 from './Components/Content2';
// import Vegtable from './Components/Vegtable';
import {BrowserRouter,Route,Routes}from 'react-router-dom'
import Vegtable from './Components/Vegtable';
import Fruits from './Components/Fruits';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar/>
     <Content1/>
     <Content2/>
     <Routes>
     <Route path="/veg" element={<Vegtable/>}/>
     <Route path="/fruits" element={<Fruits/>}/>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
