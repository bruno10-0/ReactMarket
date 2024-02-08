import { Inicio } from "./pages/inicio"
import { DetailProduct } from "./components/detailProduct/detailProduct";
import { NotFound } from "./pages/notFound";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/a" element={<DetailProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
