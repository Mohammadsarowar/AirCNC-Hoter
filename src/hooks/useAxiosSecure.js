import axios from "axios";
import { useEffect } from "react";


const axiosSecure = axios.create({
    baseURL:`${import.meta.env.VITE_API_URL}`
})

const useAxiosSecure = () => {
    useEffect(()=>{
      
     axiosSecure.interceptors.request.use(config=>{
        const token = `Bearer ${localStorage.getItem('access-token')}`
        if(token){
           config.headers.Authorization = token; 
        }
        return config
     })

     axiosSecure.interceptors.response.use(response => response, async(error)=>{

     })
    },[])

    return [axiosSecure]
}


export default useAxiosSecure;