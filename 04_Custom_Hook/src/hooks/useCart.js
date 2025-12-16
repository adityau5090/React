import { useEffect, useMemo, useState } from "react"

function useCart(){

    const [cart, setCart] = useState(() => {
        try {
            const savedCart = localStorage.getItem('cart');
            return savedCart ? JSON.parse(savedCart) : [];
        } catch (error) {
            console.error('Failed to load cart from localstorage ', error)
            return [];      
        }
    })

    useEffect(() => {
        try {
            localStorage.setItem('cart', JSON.stringify(cart)) 
        } catch (error) {
            console.error('Failed to save cart to localstorage ', error)
        }
    },[cart])

    useEffect(() => {
        const handleStorage = (e) => {
            if(e.key === 'cart'){
                try {
                    const newCart = JSON.parse(e.newValue || '[]')
                    setCart(newCart)
                } catch (error) {
                    console.error("Failed to parse cart from localstorage", error)
                }
            }
        }
        window.addEventListener('storage', handleStorage)
        //cleanup function
        return () => {window.removeEventListener('storage', handleStorage)}
    },[])

    const addToCart = (product) => {
        setCart(currentCart => {
            const existingItem = currentCart.find(item => item.id === product.id)
            if(existingItem){
                return currentCart.map(item => item.id === product.id ? {...item,quantity: item.quantity + 1} : item )
            }
            return [...currentCart, {...product, quantity : 1}]
        })

    }

    const removeFromCart = (productID) => {
        setCart(currentCart => currentCart.filter(item => item.id !== productID)
    )}

    const updateQuantity = (productId, quantity)  => {
        if(quantity < 1) return
        setCart(currentCart => currentCart.map(item => item.id === productId ? {...item, quantity} : item))
    }

    const total = useMemo(() => {
        return Number(cart.reduce((sum,item) => {
            const itemTotal = item.price * (item.quantity || 0);
            return sum + itemTotal;
        }, 0).toFixed(2))
    },[cart])

    return {
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        total
    }
}
export default useCart