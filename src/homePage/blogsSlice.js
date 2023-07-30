import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 1, imgUrl: 'https://www.planetware.com/wpimages/2020/06/france-best-cities-paris.jpg' , title: 'My first ever blog!', content: 'Let me share the store of my first ever blog.....'},
    {id: 2, imgUrl: 'https://www.planetware.com/wpimages/2020/06/france-best-cities-paris.jpg', title: 'Being a developer in Malaysia', content: 'Here goes the amazing store of my programming journey in Malaysia....'}
]

const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        addBlog(state, action) {
            state.push(action.payload)
        }
    }
})

export default blogsSlice.reducer;

export const {addBlog} = blogsSlice.actions;