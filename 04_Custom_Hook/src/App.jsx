import useCart from "./hooks/useCart"
import {products} from "./data/product"
import ProductCard from "./components/ProductCard"
import Cart from "./components/Cart"

const App = () => {
  const {addToCart,cart,removeFromCart,updateQuantity,total } = useCart()
  return (
    <div className=''>
      <header className="w-[70vw] mx-auto my-4">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
      </header>
      <main>
        <section className="flex gap-2 mt-20 mx-10">
          <div className="flex flex-wrap gap-5 items-center w-[70vw] self-start">
          {products.map((product) => (
          <ProductCard 
          key={product.id}
          product={product}
          addToCart={addToCart}/>
        ))}
        </div>
        <div className="w-[25vw]">
          <Cart 
          cart={cart}
          onUpdateQuantity={updateQuantity}
          onRemove={removeFromCart}
          quantity={total}
          />
        </div>
        </section>
      </main>
    </div>
  )
}

export default App
