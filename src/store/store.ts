import { combineSlices, configureStore } from "@reduxjs/toolkit";
import recipesSlice from "./recipesSlice";


const store = configureStore({
    reducer: combineSlices(recipesSlice),
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;