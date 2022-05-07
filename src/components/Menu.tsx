import AddIcon from '@mui/icons-material/Add';
import useFetch from './data/useFetch';
import {Modal} from "./data/type"

type Props = {
    onAdd: (product:Modal)=> void
}

const Menu:React.FC<Props> = ({onAdd}) =>{
    const style1 = {
        backgroundImage : `url('https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')`
    }
    const {data,error,isPending} = useFetch("http://localhost:8000/menu")

    const menuDetail = data.map(items=> {
        return(
            <div key={items.id} className={`border border-white w-3/4 md:w-1/3 mt-8 md:mr-4 rounded-md`}>
                <img className='rounded-md object-contain' height='180px' width="600px" alt={items.alt} src={`${items.img}`}/>
                <div className="bg-white text-black">
                    <div className={`mx-5 py-4 flex justify-between items-center`}>
                        <p className={`text-lg md:text-md capitalize`}>{items.title}</p>
                        <p className={`text-md capitalize`}>rs. {items.price} </p>
                    </div>
                    <button onClick={()=> onAdd(items)} className={`mx-5 text-lg uppercase bg-slate-700 w-1/3 md:w-1/2 lg:w-1/2 mb-2 rounded-lg text-white text-center focus:bg-blue-200 focus:text-black md:hover:bg-blue-200 md:hover:text-black transition ease-in transition-300`}>
                        add
                        <AddIcon className={`cursor-pointer ml-2`}/>
                    </button>
                </div>
            </div>
        )
    })
    return(
        <div style={style1} className={`h-full w-screen `}>
            <div className={`mx-18 md:mx-28 py-10`}>
                <h3 className={`text-3xl text-center`}>Menu</h3>
                <div className={`flex flex-col md:flex-row flex-wrap ${error || isPending? "pt-5" : ""} items-center md:justify-between`}>
                    {data && menuDetail}
                    {error && <div className='font-bold text-xl text-center w-full'>{error}</div>}
                    {isPending && <div className='text-xl font-bold text-center w-full'>Loading....</div>}
                </div>
            </div>
        </div>
    )
}

export default Menu