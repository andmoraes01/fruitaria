import { actionsTypes } from '../constants/fruits'

const INITIAL_STATE = {
    fruits: [
        { id: 1, name: 'Grape', quantity: 20 },
        { id: 2, name: 'Apple', quantity: 5 },
        { id: 3, name: 'Banana', quantity: 23 },
        { id: 4, name: 'Lemon', quantity: 15 },
        { id: 5, name: 'Orange', quantity: 2 },
        { id: 6, name: 'Strawberry', quantity: 17 },
        { id: 7, name: 'Watermelon', quantity: 13 }
    ]
}

const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionsTypes.ADD_FRUIT:
            return { fruits: [...state.fruits, { ...action.payload }] };
        case actionsTypes.REMOVE_FRUIT:
            return { fruits: state.fruits.filter(x => x.id !== action.payload.id) };
        default:
            return state;
    };
};

export { reducers }