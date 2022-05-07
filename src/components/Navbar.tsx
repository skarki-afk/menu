import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import {Modal } from "./data/type"

type Props={
    cart: Modal[]
}

const Navbar:React.FC<Props> = ({cart}) =>{
    return(
        <div className="w-screen flex justify-between items-center py-4 px-6 md:px-10 fixed">
            <Link to="/">
                <h3 className={`text-2xl md:text-4xl cursor-pointer text-blue-500 hover:text-blue-300 focus:text-blue-300 transition ease-in transition-300`}>New Corner Cafe</h3>
            </Link>
            <Badge badgeContent={cart.length} color="primary">
                <Link to="/cart">
                    <ShoppingCartOutlinedIcon className={`cursor-pointer`}/>
                </Link>
            </Badge>
        </div>
    )
}

export default Navbar