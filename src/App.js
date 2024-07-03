import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Register from './register';
import Manage from './manage';
import Edit from './Edit';
import Navbar from './navbar';



function App() {
  return (
    <div className='App'>
  
      <BrowserRouter>
    <Navbar/>
      <Routes>
       
        <Route path="/" element={<Register/>}></Route>
        <Route path="/manage" element={<Manage/>}></Route>
        <Route path="/edit/:empid" element={<Edit />} />
      </Routes>
      </BrowserRouter>
   
    </div>
  
  );
}

export default App;
