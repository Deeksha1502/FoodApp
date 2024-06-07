import { useSelector } from "react-redux"

export const Cart = () =>{

const cartItems = useSelector((store) =>store.cart.items)

    return <div className="min-h-screen bg-gradient-to-r from-violet-200 to-pink-200"> 
    <div className="font-bold text-center text-2xl mt-3">
        Cart
    </div> </div>
}