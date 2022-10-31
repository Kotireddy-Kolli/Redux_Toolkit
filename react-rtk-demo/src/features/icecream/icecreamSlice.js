import {createSlice} from "@reduxjs/toolkit"

//const {cakeActions}=require('../cake/cakeSlice')
import {ordered as cakeOrdered} from "../cake/cakeSlice"

const initialState={
    numOfIcecreams: 10,
}

const icecreamSlice=createSlice({
    name:"icecream",
    initialState,
    reducers:{
        ordered:(state)=>{
            state.numOfIcecreams--
        },
        restocked:(state,action)=>{
            state.numOfIcecreams+=action.payload
        }
    },
    // extraReducers:{
    //     ['cake/ordered']: (state)=>{
    //         state.numOfIcecreams--
    //     },
    // }
    extraReducers:(builder)=>{
        builder.addCase(cakeOrdered,
            (state)=>{
                state.numOfIcecreams--
            })
        //addCase(action type, reducer function)
        //make sure to import the cake actions from cake slice
    }
})

export default icecreamSlice.reducer
export const {ordered,restocked}=icecreamSlice.actions