import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0
}

export const counter = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.value++
        },
        decrement: (state, action) => {
            state.value--
        },
        multiplyBy: (state, action) => {
            state.value = state.value * action.payload
        }
    }
})

console.log(counter)
export const { increment, decrement, multiplyBy } = counter.actions;
export default counter.reducer;