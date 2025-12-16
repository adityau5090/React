import { FaShoppingCart } from "react-icons/fa"

function ProductCard ({product,addToCart}) {
    return (
        <div className="flex flex-col justify-center items-center gap-2 text-left bg-gray-900 min-w-[20vw] w-fit px-1 py-4 rounded-lg hover:bg-gray-800 hover:-translate-y-2.5  transition-transform duration-700 ease-in-out ">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-blue-500 font-semibold">${product.price}</p>
            <button className="flex items-center gap-2 bg-blue-500 text-black w-fit px-2 rounded-md cursor-pointer hover:bg-blue-600" onClick={() => addToCart(product)}> <FaShoppingCart />Add to Cart</button>
        </div>
    )
}

export  default ProductCard;