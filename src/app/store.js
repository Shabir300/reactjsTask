import { configureStore } from '@reduxjs/toolkit';
import blogsSlice from '../homePage/blogsSlice'

export default configureStore({
    reducer: {
        blogs: blogsSlice
    }
})
