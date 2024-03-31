const { createSlice, nanoid, current, createAsyncThunk} = require("@reduxjs/toolkit");


const initialState = {
     database: [],
    // users: JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : ""
}

export const fetchApiUsers = createAsyncThunk("fetchApiUsers",async () => {
    const result = await fetch("https:/example-data.draftbit.com/cars");
    return result.json();
})  

const ApiSLice = createSlice({

    name: "addUserSlice",
    initialState,
    reducers:{
        addUser: (state, action) => {
            const data = {
                id: nanoid(),
                name: action.payload
            }
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(fetchApiUsers.fulfilled, (state, action) =>{
            state.isloading =false,
                state.database = action.payload
        })
    }
})

export default ApiSLice.reducer;