import { createSlice } from "@reduxjs/toolkit";
import { type PayloadAction } from "@reduxjs/toolkit";


type StatusAction = 'pending...'|'active'| 'notActive'

interface CountState { 
    count: number;
    status: StatusAction
};

export const initialState:CountState = {
    count: 0,
    status: 'pending...'
}

export const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        stateStatus: (state, action:PayloadAction<StatusAction>) => {
            state.status= action.payload
        },
    }
});

export const { increment, decrement, reset, stateStatus } = CounterSlice.actions;
export default CounterSlice.reducer;