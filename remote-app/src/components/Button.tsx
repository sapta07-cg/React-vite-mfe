

import type {RootState,AppDispatch} from 'host/Store'
import { useSelector, useDispatch } from 'react-redux';
import {increment} from 'host/counterSlice';




const Button= () => {

  const count=useSelector((state:RootState)=>state.counter.value)
  const dispatch=useDispatch<AppDispatch>()

  



  return (
    <>

    <h1>Remote Counter : {count}</h1>

    <button
      style={{
        padding: '10px 16px',
        backgroundColor: '#4f46e5',
        color: '#fff',
        borderRadius: '6px',
        border: 'none'
      }}



    >
      Remote Button
    </button>
    <button onClick={()=>dispatch(increment())}>increment</button>

    </>
    
  )
}

export default Button
