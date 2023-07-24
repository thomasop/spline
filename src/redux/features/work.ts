import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    work: ""
}

const work = createSlice({
    name: 'work',
    initialState,
    reducers: {
        changeWork: (state, action) => {
            state.work = action.payload.work;
        },
        closeWork: (state) => {
            state.work = "";
        }
    }
});

export default work