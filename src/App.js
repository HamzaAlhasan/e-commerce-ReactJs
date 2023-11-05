import './App.css';
import { Route,Routes } from 'react-router-dom';
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Cart from './Pages/Cart/Cart'
import Protected from './Pages/Home/Protected';
import Details from './Pages/Detalis/Details';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path ='/login' element={<Login />} />
        <Route path='/' element={<Protected />}>
          <Route path='/home' element={<Home />} />
        </Route>
        <Route path='product/:productId' element={<Details />} />
        <Route path='/contact' element={<Contact />} />
        <Route path ='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
