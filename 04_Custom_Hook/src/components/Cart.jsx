// import { div } from "three/tsl";
import CartItem from "./CartItem"

function Cart({cart,onUpdateQuantity,onRemove,quantity}) {
    if(cart.length === 0) {
        return <p className="text-bold text-xl my-2">Your cart is empty</p>
    }
    return (
        <div className="bg-gray-900 p-2 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Shopping cart</h2>
            {cart.map(item => (
                <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={onUpdateQuantity}
                onRemove={onRemove}
                />   
            ))}
            <div className="mx-1 ">
                <h3 className="text-xl font-semibold text-right my-2">Total: ${typeof total === 'string' ? quantity : quantity.toFixed(2)}</h3>
                <button className="bg-green-600 w-1/2 mx-auto flex justify-center items-center text-sm py-2 rounded-lg cursor-pointer font-semibold">Checkout</button>
            </div>
        </div>

    )

}

export default Cart;