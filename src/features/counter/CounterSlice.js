import {createSlice} from "@reduxjs/toolkit";

export const counterSlice=createSlice({
    name:'counter',
    initialState:{
        value:0
    },

    reducers:{
        increment:state=>{
            state.value++
        },
        decrement:state=>{
            state.value--
        },
        reset:state=>{
            state.value=0

        },
        setValueCount: (state,action)=>{
            state.value=action.payload
        },
        incrementByAmount: (state,action)=>{
            state.value+=action.payload

        },
        decrementByAmount: (state,action)=>{
            state.value-=action.payload

        }
    }
}
);
export const selectCount = (state) => state.counter.value;
export const {increment,decrement,reset,setValueCount,set,incrementByAmount,decrementByAmount}=counterSlice.actions;
export default counterSlice.reducer;