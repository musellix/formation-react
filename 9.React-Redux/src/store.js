import {configureStore} from "@reduxjs/toolkit"
import counter from "./features/counter"
import fruits from "./features/fruits"
import fruitsCart from "./features/fruitsCart"

export const store = configureStore({
    reducer: {
        counter,
        fruits,
        fruitsCart,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddleware)
})

function customMiddleware(store) {
    return function(next) {
        return function(action) {
            // console.log(store.getState())
            // console.log(next)

            // a chaque fois qu'on fait une action, n'importe laquelle, on intercepte et on fait addOne :)
            next({
                type: 'fruitsCart/addOne',
                payload: {
                    name: "Mango",
                    url: "/images/mango.jpg",
                    price: 999,
                    id: 65237894
                }
            })
        }
    }
}