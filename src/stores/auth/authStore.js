import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from '../../features/authSlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  devTools: import.meta.env.VITE_MODE !== 'production',
})