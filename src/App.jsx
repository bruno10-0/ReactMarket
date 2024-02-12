import { Inicio } from "./pages/inicio"
import { DetailProduct } from "./components/detailProduct/detailProduct";
import { NotFound } from "./pages/notFound";
import { Products } from "./pages/products";
import {Services} from "./pages/services"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/a" element={<DetailProduct />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
