import { createSlice } from "@reduxjs/toolkit";


interface RemoteState {
  value: number;
}

const initialState: RemoteState = {
    value: 100,
}

const remoteSlice= createSlice({
  name: "remote",
    initialState,   
    reducers: {
    addTen: (state) => {
      state.value += 10;
    }
    },
});

export const { addTen } = remoteSlice.actions;
export default remoteSlice.reducer;


