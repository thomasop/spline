import { configureStore } from "@reduxjs/toolkit";
import { mode } from "./features/mode";
import work from "./features/work";

const store = configureStore({
    reducer: {
        mode: mode.reducer,
        work: work.reducer,
    },
});

export default store;