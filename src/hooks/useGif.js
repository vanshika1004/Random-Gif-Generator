
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const API_KEY = 'ZPUnra1JDthluNs9mDITROFOs2D0At0T'
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
// const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;    

const useGif = (tag) => {
    const [gif,setGif] = useState('');
    const [loading , setLoading] = useState('false');
    
    
    async function fetchData(tag){
        setLoading(true);
        
        // const url =`https://api.giphy.com/v1/gifs/random?api_key=ZPUnra1JDthluNs9mDITROFOs2D0At0T`
        const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
    }
    useEffect(()=>{
        fetchData('car');
    },[])
    return {gif , loading , fetchData};
  
}
export default useGif