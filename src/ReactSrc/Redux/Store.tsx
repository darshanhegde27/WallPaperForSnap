import { configureStore } from '@reduxjs/toolkit'
import { RedditServiceApi } from '../services/RedditService'
import FetchReducer from './fetchSlice'

export default configureStore({
  reducer: {
    FetchReducer:FetchReducer ,
    [RedditServiceApi.reducerPath]:RedditServiceApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(RedditServiceApi.middleware)
})