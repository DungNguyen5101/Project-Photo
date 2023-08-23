// import './App.css';
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import CartFeature from "./features/Cart";
import ProductFeature from "./features/Product";
import DetailPage from "./features/Product/page/DetailPage";
import ListPage from "./features/Product/page/ListPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<ProductFeature />}>
          <Route path="/products" element={<ListPage />} />
          <Route path="/products/:productId" element={<DetailPage />}></Route>
        </Route>
        <Route path="/cart" element={<CartFeature />} />
      </Routes>
    </div>
  );
}

export default App;
