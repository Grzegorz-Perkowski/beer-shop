import { BrowserRouter, Routes, Route } from "react-router-dom";
import BeersList from "./components/BeersList/BeersList";
import BeerDetails from "./components/BeerDetails/BeerDetails";
import NotFound from "./pages/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<BeersList />} />
        <Route path="beers/:id" element={<BeerDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
