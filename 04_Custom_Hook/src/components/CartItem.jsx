import { FaTrash, FaMinus, FaPlus } from "react-icons/fa"

function CartItem({item, onUpdateQuantity, onRemove}){
    // console.log(item)
    return (
        <>
        <div className="flex justify-between items-center mx-10 my-2">
            <div>

                <h4 className="texl-lg font-medium">{item.name}</h4>
                <p className="text-blue-500 text-sm font-medium">₹{item.price}</p>
                <div className="flex gap-2 items-center py-2"> 
                    <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    className="w-[1.6vw] h-[1.6vw] border rounded-full flex justify-center items-center cursor-pointer"
                    >
                        <FaMinus/>
                    </button>
                    <span>{item.quantity}</span>
                    <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className="w-[1.6vw] h-[1.6vw] border rounded-full flex justify-center items-center cursor-pointer"
                    >
                        <FaPlus/>
                    </button>
                </div>               
            </div>
            <button
            onClick={() => onRemove(item.id)}
            className="cursor-pointer text-red-500"
            >
                <FaTrash/>
            </button>
        </div>
        <div className="w-full h-px bg-gray-700"></div>
        </>
    )
}

export default CartItem