import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./components/Footer";
import SingleProduct from "./pages/SingleProduct";
import CategoryProduct from "./pages/CategoryProduct";
import { useCart } from "./context/CartContext";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  const [location, setLocation] = useState();
  const [openDropdown, setOpenDropdown] = useState(false);
  const {cartItem,setCartItem}=useCart();

const getLocation = async () => {
  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    const { latitude, longitude } = position.coords;
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

    const response = await axios.get(url);
    const exactLocation = response.data.address;
    setLocation(exactLocation);
    setOpenDropdown(false);
  } catch (e) {
    console.error("Error getting location:", e);
  }
};


  useEffect(() => {
    getLocation();
    console.log(location)
  }, []);

  useEffect(()=>{
   const storedCart = localStorage.getItem('cartItem');
   if(storedCart){
    setCartItem(JSON.parse(storedCart))
   }
  },[])

  useEffect(()=>{
    localStorage.setItem("cartItem",JSON.stringify(cartItem))
  },[cartItem]);

  return (
    <BrowserRouter>
      <Navbar location={location} getLocation={getLocation} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cart" element={<ProtectedRoute><Cart location={location} getLocation={getLocation} /></ProtectedRoute>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products/:id" element={<SingleProduct />}></Route>
        <Route path="/category/:category" element={<CategoryProduct />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
