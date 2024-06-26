import { configureStore } from "@reduxjs/toolkit";
import librarySlice from "./slices/librarySlice";
import usersSlice from "./slices/usersSlice";
import contentSlice from "./slices/contentSlice";
import testApiSlice from "./slices/testApiSlice";

export const store = configureStore({
    reducer: {
        library: librarySlice,
        DatabaseUsers : usersSlice,
        content: contentSlice,
        DB: testApiSlice
    }
})