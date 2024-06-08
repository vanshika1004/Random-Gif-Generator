import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const API_KEY = 'ZPUnra1JDthluNs9mDITROFOs2D0At0T'
const Random = () => {
    const {gif , loading , fetchData} = useGif();
  return (
    <div className='w-1/2  bg-green-500 rounfded-lg border border-black flex flex-col items-center mt-[15px] gap-y-5'>
        <h1 className='text-3xl underline uppercase'>A Random Gif</h1>
        {
            loading ? (<Spinner/>) : (<img src={gif}  width="300"/>)
        }
        <button onClick={()=>fetchData()}
        className='w-10/12 bg-blue-200 text-lg rounded-lg py-2 mb-[20px]'>
            Generate
        </button>
    </div>
  )
}

export default Random