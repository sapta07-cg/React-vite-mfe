

import type {RootState,AppDispatch} from 'host/Store'
import { useSelector, useDispatch } from 'react-redux';
import {increment} from 'host/counterSlice';
import { addTen } from '../store/remoteSlice';




const Button= () => {

  const count=useSelector((state:RootState)=>state.counter.value)
  const dispatch=useDispatch<AppDispatch>()

  const remoteValue=useSelector((state:RootState)=>state.remote?.value)

  const handleClick=()=>{
    console.log("Remote Button clicked");
    dispatch(addTen());
  }

  



  return (
    <>

    <h1>Remote Counter : {count}</h1>
    <h2>Value of remote app : {remoteValue} </h2>

    <button
      style={{
        padding: '10px 16px',
        backgroundColor: '#4f46e5',
        color: '#fff',
        borderRadius: '6px',
        border: 'none'
      }}


      onClick={handleClick}

    >
      Remote Button
    </button>
    <button onClick={()=>dispatch(increment())}>increment</button>

    </>
    
  )
}

export default Button
