import { useState } from "react";
import ProductCard from "./Components/ProductCard";
import { Products } from "./Data";

function App() {
  const [isOpen, setIsOpen] = useState(true)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }
  const RenderProductCard= Products.map(product=><ProductCard key={product.id} product={product}/>)




  return (
    <>
      <div className="container mx-auto">
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-10">
          {RenderProductCard}
        </div>
      </div>
    </>
  );
}

export default App;
