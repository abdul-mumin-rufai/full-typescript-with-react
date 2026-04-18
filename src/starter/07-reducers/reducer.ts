export type StateTpye = {
    count: number;
    status: string;
};

export const initialState: StateTpye = {
    count: 0,
    status: 'pending...',
};

type StateAction = {
    type: 'increment'| 'decrement'| 'reset'
};

export type UpdateCounter = StateAction;


export const reducerFunction = (state: StateTpye, action: UpdateCounter): StateTpye => { 
    switch (action.type) {
        case 'decrement':
            return { ...state, count: state.count - 1 };
        case 'increment':
            return { ...state, count: state.count + 1 };
        case 'reset':
            return{...state, count: 0}
        default:
            return state;
    }
};


