
import React, {  useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
    
    
    const [tag , setTag] = useState('car');
    const {gif , loading , fetchData} = useGif(tag);
    
    
    
  return (
    <div className='w-1/2  bg-blue-500 rounfded-lg border border-black flex flex-col items-center mt-[15px] gap-y-5'>
        <h1 className='text-3xl underline uppercase'>Random {tag} Gif</h1>
        {
            loading ? (<Spinner/>) : (<img src={gif}  width="300"/>)
        }
        <input
        className='w-10/12 text-lg rounded-lg py-2 mb-[6px] text-center'
        onChange={(event)=>{setTag(event.target.value)}}
        value={tag}
        />

        <button onClick={()=>fetchData(tag)}
        className='w-10/12 bg-blue-200 text-lg rounded-lg py-2 mb-[20px]'>
            Generate
        </button>
    </div>
  )
}

export default Tag