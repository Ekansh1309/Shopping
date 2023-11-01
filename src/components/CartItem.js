import {FcDeleteDatabase} from 'react-icons/fc'
import { useDispatch } from 'react-redux';
import { toast } from "react-hot-toast";
import { add,remove } from "../redux/Slices/cartSlice";


const CartItem = ({item,itemIndex}) => {
  const dispatch= useDispatch()

  function removeFromCart(){
    dispatch(remove(item.id))
    toast.success("Item Removed")
  }

  return (
    <div className=" w-[500px] cartborder flex items-center justify-between  gap-3 p-4 mt-10 cartmiddle">
      {/* <div className='flex items-center justify-between'> */}

        <div className="w-[60%]">
          <img src={item.image} className="h-full w-full" />
        </div>

        <div>
          <h1 className="text-gray-700 font-semibold text-lg  m-1">
            {item.title}</h1>
          <p className=" text-gray-800 font-normal text-[15px] text-left ">
            {item.description.split(" ").slice(0,10).join(" ")+"..."}</p>
          <div className='flex justify-between'>
            <p className="text-green-600 font-semibold ">${item.price}</p>
            <div onClick={removeFromCart} className='cursor-pointer'>
              <FcDeleteDatabase className='text-2xl' />
            </div>
          </div>
        </div>

      {/* </div> */}
    </div>
  );
};

export default CartItem;
