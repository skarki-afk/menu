import Navbar from "./Navbar"
import {Modal} from "./data/type"
import DeleteIcon from '@mui/icons-material/Delete';
type Props = {
    cart: Modal[]
    onAdd: (product:Modal)=> void;
    onRemove: (product:Modal)=> void;
    handleDelete: (id:number)=> void
}

const Cart = ({cart,onAdd,onRemove,handleDelete}:Props) =>{
    const background = {
        backgroundImage: `url("https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80")`
    }
    const itemsPrice = cart.reduce((a,c) => a + c.price * c.quantity, 0)
    const tax = itemsPrice * 0.13;
    const shipping = itemsPrice > 1500? 0 : 75;
    const totalPrice = itemsPrice + tax + shipping;
    return(
        <div>
            <Navbar cart={cart} />
            <div style={background} className={`pt-24 md:px-16 flex flex-col items-center h-screen w-screen bg-no-repeat bg-cover `}>
                <h3 className="uppercase text-4xl text-center">your bag</h3>
                <div className={` border border-white w-4/5 h-full my-5 rounded-lg`}>
                    <h3 className="text-xl md:text-2xl pt-2 uppercase text-center">order summary</h3>
                    <div>
                        {cart.length === 0 && <h2 className="text-red-200 pt-8 uppercase text-lg md:text-xl flex flex-col items-center justify-center">bag is empty....</h2>}     
                    </div>
                    <div className="uppercase h-3/4 relative text-lg md:text-xl flex flex-col items-center ">
                        {cart.length !== 0 && cart.map(item => {
                            return(
                                <div key={item.id} className="flex justify-between w-full py-1 px-4 text-sm capitalize">
                                    <div className="w-full flex justify-between items-center ">
                                        <h2 className="flex-auto md:flex-1 text-center">{item.title}</h2>
                                        <span className="text-2xl flex-1 md: flex-1 cursor-pointer hover:text-black focus:text-black transition ease-in transition-300 text-center" onClick={()=> onAdd(item)}>+</span>
                                        <span className="text-2xl flex-1 md:flex-1 cursor-pointer hover:text-black focus:text-black transition ease-in transition-300 text-center" onClick={()=> onRemove(item)}>-</span>
                                        <div className="md:flex-1 text-center"> {item.quantity} x {item.price.toFixed(2)} </div>
                                        <DeleteIcon onClick={ () => handleDelete(item.id)}className="cursor-pointer"/>
                                    </div>
                                </div>
                            )
                        })}
                        {cart.length !==0 && 
                        <div className="w-full flex px-16 py-5 flex-col items-center">
                            <div className="w-full  flex justify-between">
                                <h4>items price :</h4> <div>Rs. {itemsPrice} </div>
                            </div>
                            <div className="w-full  flex justify-between">
                                <h4>tax :</h4> <div>Rs. {tax.toFixed(2)} </div>
                            </div>
                            <div className="w-full  flex justify-between">
                                <h4>shipping :</h4> <div>Rs. {shipping} </div>
                            </div>
                            <div className="w-full  flex justify-between">
                                <h4>total price :</h4> <div>Rs. {totalPrice} </div>
                            </div>
                        </div>}
                        {cart.length !==0 && <button className="w-3/4 bg-slate-700 uppercase rounded-lg font-semibold  focus:bg-blue-200 focus:text-black md:hover:bg-blue-200 md:hover:text-black transition ease-in transition-300">
                            checkout
                        </button>}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cart