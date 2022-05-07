import Img from "./Img"
import Menu from "./Menu"
import Navbar from "./Navbar"
import {Modal} from "./data/type"


type Props ={
    onAdd: (product:Modal)=> void
    cart: Modal[]
}

const Hero:React.FC<Props> = ({onAdd,cart}) =>{
    return(
        <div>
            <Navbar cart={cart}/>
            <div className={`h-screen bg-black`}>
                <Img/>
                <div className="flex flex-nowrap justify-between items-center">
                    <Menu onAdd={onAdd}/>
                </div>
            </div>
        </div>
    )
}

export default Hero