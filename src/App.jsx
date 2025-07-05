import { BrowserRouter,Routes,Route } from "react-router-dom"
import Products from "./pages/Products"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import About from "./pages/About"
import Navbar from "./components/Navbar"

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/about" element={<About/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
