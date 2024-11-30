import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useCharacters(url) {

    const [characters,setCharacters] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
  
    useEffect(()=>{
      setIsLoading(true)
      axios.get(`${url}`)
      .then((res)=>{
        setCharacters(res.data.results.slice(0,5));
        setIsLoading(false)
    
      }).catch((err)=>{
       toast.error(err.response.data.error)
        
      }).finally(()=>{
        setIsLoading(false)
      })
    
    },[]);

    return{characters,isLoading};
    
}