import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Cart from "./components/Cart/Cart"
import Checkout from "./components/Checkout/Checkout"
import Card from "./components/Card"
import { CartProvider } from "./context/CartContext"

function App() {

  return (
    <BrowserRouter>
      <CartProvider >
        <NavBar title='El mundo del papel'/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer/>} />
          <Route path="/detail/:productId" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contacto" element={<h1><Card /></h1>} />
          <Route path="*" element={<h1>Error 404: Esta página no existe </h1>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
