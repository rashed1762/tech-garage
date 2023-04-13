import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navcomp from './Pages/Shared/Navcomp';
import Homecomp from './Pages/Home.js/Homecomp';
import Shop from './Pages/Shop/Shop';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Shared/Login';
import Singup from './Pages/Shared/Singup';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './Privateroute/PrivateRoute';

function App() {
  return (
    <div className="App">
        <Navcomp></Navcomp>
      <Routes>
        <Route path='/' element={<Homecomp></Homecomp>}></Route>
        <Route path='/shop' element={
        <PrivateRoute>
            <Shop></Shop>
        </PrivateRoute>
        
        }></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singup' element={<Singup></Singup>}></Route>
       
      </Routes>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
