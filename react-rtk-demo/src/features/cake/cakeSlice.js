import {createSlice} from "@reduxjs/toolkit"

/*createSlice function will accepts object as an argument. In this object we specify 3 properties
name,initialstate,reducers(This is an object), We can specify reducers as key value functions.
*/
const initialState={
    numOfCakes:10
}
const cakeSlice=createSlice({
    name:'cake',
    initialState,
    reducers :{
        ordered: (state)=>{
            //No need to immmer, Tookkit will take care
            state.numOfCakes--
        },
        restocked: (state,action)=>{
            state.numOfCakes+=action.payload
        }
    }
})
/*Create slice whill take care of the action creator with the names of reducer functions.
It will also return the main reducer function. which we can then be provided to store*/

export default cakeSlice.reducer
export const {ordered,restocked} =cakeSlice.actions