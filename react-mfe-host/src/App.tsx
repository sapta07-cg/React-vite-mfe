import React, { Suspense } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";
import { decrement, increment, reset } from "./store/counterSlice";
const RemoteButton = React.lazy(() => import("remoteApp/App"));

const App:React.FC=()=> {

  const count=useSelector((state:RootState)=>state.counter.value)
  const dispatch=useDispatch<AppDispatch>()

  

  

  return (
    <>
      <div>
        <h1>Hello world : {count}</h1>

        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
        <button onClick={()=>dispatch(reset())}>reset</button>
        <Suspense fallback={<div>Loading remote...</div>}>
          <RemoteButton/>
        </Suspense>
      </div>
    </>
  );
}

export default App;
