import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [

    ]
}

export const fruitsCart = createSlice({
    name: "fruitsCart",
    initialState,
    reducers: {
        addOne: (state, action) => {
            const fruitIndex = state.cart.findIndex(obj => obj.id === action.payload.id)
            if(fruitIndex > -1) {
                state.cart[fruitIndex].quantity++;
            }
            else {
                // action.payload = objet passé. ici 'fruit'
                state.cart.push({...action.payload, 'quantity': 1})
            }
        }, 
        removeOne: (state, action) => {

        }
    }
})

export const {addOne, removeOne} = fruitsCart.actions;
export default fruitsCart.reducer;
