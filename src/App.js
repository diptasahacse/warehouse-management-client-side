import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import ResetPassword from './Pages/ResetPassword/ResetPassword';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import MyItems from './Pages/MyItems/MyItems';
import AddItem from './Pages/AddItem/AddItem';
import { ToastContainer } from 'react-toastify';
import ManageItem from './Pages/ManageItem/ManageItem';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <div>
      {/* Shared Header */}
      <Header></Header>


      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/myitems' element={<MyItems></MyItems>}></Route>
        <Route path='/additem' element={<AddItem></AddItem>}></Route>
        <Route path='/manageitems' element={<ManageItem></ManageItem>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        
        <Route path='/manageinventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/resetpassword' element={<ResetPassword></ResetPassword>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      {/* Shared Footer */}
      <Footer></Footer>
      <ToastContainer></ToastContainer>

    </div>
  );
}

export default App;
