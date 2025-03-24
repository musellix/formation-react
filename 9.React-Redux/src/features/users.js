import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    data: undefined,
    error: false,
};

export const users = createSlice({
    name: "users",
    initialState,
    reducers: {
        addData: (state, action) => {
            state.data = action.payload;
            state.loading = false;
        },
        addLoader: (state, action) => {
            state.loading = true;
        },
        addError: (state, action) => {
            state.error = true;
            state.loading = false;
        },
    },
});

export function getData(action) {
    return async (dispatch, getState) => {
        dispatch(addLoader());
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if(!response.ok) {
                throw new Error("An error has occured");
            }
            return response.json();
        })
        .then(data => dispatch(addData(data)))
        .catch(error => dispatch(addError()));
    };
}

export const {addData, addLoader, addError} = users.actions;
export default users.reducer;