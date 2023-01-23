import { configureStore } from '@reduxjs/toolkit'
import FetchReducer from './fetchSlice'

export default configureStore({
  reducer: {
    FetchReducer:FetchReducer ,
  },
})