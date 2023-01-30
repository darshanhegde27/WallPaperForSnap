import { createSlice } from '@reduxjs/toolkit'

export const fetchSlice = createSlice({
  name: 'FetchSlice',
  initialState: {
    data:[],
    error:'',
    isLoading:true
  },
  reducers: {
   load:(state,action)=>{
    state.isLoading=false
    state.error=action.payload.error
    state.data=action.payload.data
   
   },
   
  },
})

// Action creators are generated for each case reducer function

export const {load}=fetchSlice.actions
export default fetchSlice.reducer