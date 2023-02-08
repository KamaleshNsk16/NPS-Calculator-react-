import { configureStore } from "@reduxjs/toolkit";

reducerFn = (state={counter:0}, action)=>{

}
const store = configureStore(reducerFn  )

export default store;