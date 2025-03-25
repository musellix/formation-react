import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    valeur: 0,
    intervalId: undefined,
};

export const chrono = createSlice({
    name: "chrono",
    initialState,
    reducers: {
        tick: (state, action) => {
            state.valeur++;
        },
        reset: (state, action) => {
            state.valeur = 0;
            state.intervalId && window.clearInterval(state.intervalId)
            state.intervalId = undefined;
        },
        setupId: (state, action) => {
            state.intervalId = action.payload
        }
    }
})

export function startChrono(action) {
    return function(dispatch, getState) {
        if(getState().chrono.intervalId) return;

        const intervalId = setInterval(() => {
            dispatch(tick())
        }, 1000)
        dispatch(setupId())
        dispatch(setupId(intervalId))
    }
}

export const {tick, reset, setupId} = chrono.actions;
export default chrono.reducer;
