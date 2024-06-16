import { configureStore } from "@reduxjs/toolkit";
import gameStateSlideReducer from "./gameStateSlice";

const store = configureStore({
    reducer: {
        gameState: gameStateSlideReducer,
    },
});

export default store;
