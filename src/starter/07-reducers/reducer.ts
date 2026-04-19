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

type StatusType = {
    type: 'setStatus';
    payload: 'active' | 'inactive';
};

export type UpdateCounter = StateAction| StatusType;


export const reducerFunction = (state: StateTpye, action: UpdateCounter): StateTpye => { 
    switch (action.type) {
        case 'decrement':
            return { ...state, count: state.count - 1 };
        case 'increment':
            return { ...state, count: state.count + 1 };
        case 'reset':
            return { ...state, count: 0 }
        case 'setStatus':
            return {...state, status: action.payload};
        default:
            const unHandledType: never = action;
            throw new Error(`Unhandled type ${unHandledType} check the reducer function`);
    }
};


