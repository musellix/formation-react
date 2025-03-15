import {configureStore} from "@reduxjs/toolkit"
import counter from "./features/counter"
import fruits from "./features/fruits"

export const store = configureStore({
    reducer: {
        counter,
    }
})