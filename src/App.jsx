import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Item/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router";
import ItemDetailContainer from "./components/Item/ItemDetailContainer";
import { CartContextProvider } from "./context/cartContext";
import CartContainer from "./components/Cart/CartContainer";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <main>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting="Nuestros Productos" />}
            />
            <Route
              path="/category/:catParam"
              element={<ItemListContainer greeting="Categoria" />}
            />
            <Route path="/detail/:idParam" element={<ItemDetailContainer />} />
            <Route path="*" element={<p>Oops! No encontramos la pagina</p>} />
            <Route path="/cart" element={<CartContainer />} />
          </Routes>
        </main>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
