
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
          <Routes>
          
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/cart" element={<Cart />} />
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/category/:id" element={<ItemListContainer />}/>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<h1> error </h1>}/>
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

