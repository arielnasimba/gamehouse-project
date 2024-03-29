import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    admin:{
        adminName: "admin",
        pwd: 123456,
        mail: "admin@gmail.com",
    },

    newUser:{
        newUserName: "",
        pwd: null,
        mail: ""
    },

    DB_users:[]
}

const userSlice = createSlice( {

    name: "usersLib",
    initialState,
    reducers:{

        // admin functions
        checkAdminName:( state, action) => { return( state.admin.adminName == action.payload)}, //admin name check
        checkAdminPwd:( state, action) => { return(state.admin.pwd == action.payload)}, //admin password check
        checkAdminMail:( state, action) => { return(state.admin.mail == action.payload)}, //admin mail check
        
        // new user functions
        checkNewUserName:( state, action) => { return( state.newUser.newUserName == action.payload)}, //new user name check
        checkNewUserPwd:( state, action) => { return(state.newUser.pwd == action.payload)}, //new user password check
        checkNewUserMail:( state, action) => { return(state.newUser.mail == action.payload)}, //new user mail check

        addDbUsers:(state, action) => ( state.DB_users.push(action.payload))
    }
})

export const { checkAdminName, checkAdminPwd, checkAdminMail, checkNewUserName, checkNewUserPwd, checkNewUserMail, addDbUsers} = userSlice.actions;
export default userSlice.reducer;
