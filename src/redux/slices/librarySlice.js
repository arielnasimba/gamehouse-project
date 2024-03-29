import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "library",
    content: [],
    categories:[]
}

const librarySlice = createSlice({
    name:"libraryGames",
    initialState,
    reducers: {
        updateLibrary: ( state, action) => (
            state.content = action.payload
        ),
        addCategories:( state, action) => (
            state.categories = action.payload
        )
    }
})

export const { updateLibrary, addCategories} = librarySlice.actions;
export default librarySlice.reducer;
