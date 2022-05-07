import { useEffect, useState } from "react"
import {Modal} from "./type"

const useFetch = (url:string) => {
    const [data,setData] = useState<Modal[]>([])
    const [isPending,setIsPending] = useState<boolean>(true)
    const [error, setError] = useState<string>("")
    useEffect(()=>{
        fetch(url)
        .then(res => {
            if(!res.ok){
                throw Error("could not fetch data from the resource")
            }
            return res.json()})
        
        .then(data => {
            setData(data)
            setIsPending(false)
        })
            
        .catch(err => {
            setIsPending(false)
            setError(err.message)
        
        })
    }
        ,[url])
        return {data,error,isPending}
}

export default useFetch