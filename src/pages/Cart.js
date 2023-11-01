import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const {cart} = useSelector((state)=>state)
  const [totalAmount,setTotalAmount] = useState(0)

  useEffect(()=>{
    setTotalAmount( cart.reduce((acc,curr)=> acc+curr.price,0) )
  },[cart])

  return (
    <div>
      {
        cart.length>0 ? 
        (
          <div className="cart768">
            <div className="m-1">
              {
                cart.map((item,index)=>(
                  <CartItem key={item.id} item={item} itemIndex={index} />
                ))
              }
            </div>

            <div className="h-[80vh] flex flex-col justify-around m-1 items-center ">
              <div>
                <div className="text-green-700 font-semibold " >Your Cart</div>
                <div className="text-green-700 text-5xl font-semibold ">SUMMARY</div>
                <p className="text-gray-700 font-semibold text-lg  mt-3">
                  <span>Total Items: {cart.length}</span>
                </p>
              </div>

              <div>
                <p className="text-gray-700 font-semibold text-lg  mt-3">Total Amount:
                <span className="font-bold">${totalAmount.toFixed(2)}</span>
                  </p>
                <button className="button-65">Checkout Now</button>
              </div>

            </div>
            


          </div>


        ) : 
        (
          <div className="flex flex-col h-[80vh] justify-center items-center">
            <h1>Your Cart is Empty </h1>
            <Link to='/'>
              <button className="button-65">Shop Now</button>
            </Link>
          </div>
        )
      }
    </div>
  )
};

export default Cart;
