import { useState } from "react";
import ProductList from "./components/ProductList";

function App() {

const [products, setProducts] = useState([
    {id: 1, title: 'fucking apple wtach', price: "$600"},
    {id: 2, title: 'asshole apple wtach', price: "$390"},
    {id: 3, title: 'pusssy apple wtach', price: "$520"},
    {id: 4, title: 'dick apple wtach', price: "$740"}
  ]);


  return (
    <div >
      <ProductList products={products} />
    </div>
  );
}

export default App;