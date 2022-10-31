import {configureStore} from "@reduxjs/toolkit"
import   {createLogger} from "redux-logger"

import cakeReducer from "../features/cake/cakeSlice"
import icecreamReducer from '../features/icecream/icecreamSlice'
import userReducer from '../features/user/userSlice'
const logger=createLogger()

//Accepts object as arg, reducer: we specify all reducers(Slices) that belong to one feature.
const store=configureStore({
    reducer :{
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer,
    },
    middleware:(getDefaultMiddleware)=>{
       return getDefaultMiddleware().concat(logger)
    },
})
export default store
//Export so we can dispatch action on index.js