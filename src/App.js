
import './App.css';
// import Dashbord from './Deshbords/pages/Dashbord';
 import Login from './components/pages/Login';
 import Register from './components/pages/Register';
 import Cart from './components/pages/Cart';
 import SingleProduct from './components/pages/SingleProduct';
 import ProductList from './components/pages/ProductList';
 import Home from './components/pages/Home';
import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom";
// import DeshHome from './Deshbords/pages/DeshHome';
// import User from './Deshbords/pages/User/User';
// import ProductListDash from './Deshbords/pages/ProductListDash/ProductListDash';
import Sanju from './Deshbords/pages/sanju/Sanju';
// import DeshHome from './Deshbords/pages/DeshHome';
import UserList from './Deshbords/pages/UserList/UserList';
import User from './Deshbords/pages/User/User';
import ProductDash from './Deshbords/pages/Product/ProductDash';
import NewUser from './Deshbords/pages/NewUser/NewUser';
import NewProduct from './Deshbords/pages/NewProduct/NewProduct';
import ProductListDash from './Deshbords/pages/ProductListDash/ProductListDash';
import DeshHome from './Deshbords/pages/DeshHome';
import Success from './components/pages/Success';
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  // console.log(user.isAdmin);
  return (
    <div>
      <BrowserRouter>
  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="success" element={ <Success />} />
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="/product/:id"  element={<SingleProduct />} />
      <Route path="cart" element={user ?<Home /> :<Cart />} />
      <Route path="Register" element={user ?<Home /> :<Register />} />
      
        <Route path="login" element={user ?<Home /> :<Login />} />
      <Route path="/sanju" element={<Sanju />} >
      
      
          <Route exact  path="/sanju" element={<DeshHome />} />
          <Route path="productDash" element={<ProductDash />} />
          <Route path="newUser" element={<NewUser />} />
          <Route path="userList" element={<UserList />} />
          <Route path="user" element={<User />} />
          <Route path="newProduct" element={<NewProduct />} />
          <Route path="productListDash" element={<ProductListDash />} />





      </Route>
    </Routes>
  </BrowserRouter>,
     
    </div>
  );
}

export default App;

