import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    list: [
        {
            name: "Mango",
            url: "/images/mango.jpg",
            price: 5,
            id: 65237894
        },
        {
            name: "Watermelon",
            url: "/images/watermelon.jpg",
            price: 7,
            id: 25337535
        },
    ]
}

export const fruits = createSlice({
    name: "fruits",
    initialState,
    reducers: {

    },
    extraReducers: {
        ["fruitsCart/addOne"]: (state, action) => {
            console.log("Hello from fruits reducer")
        }
    }
});

export default fruits.reducer;