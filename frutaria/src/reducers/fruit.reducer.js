import { actionsTypes } from '../constants/fruits'

const INITIAL_STATE = {
    fruits: [
        { id: 1, name: 'Uva', quantity: 20 },
        { id: 2, name: 'Maça', quantity: 5 }
    ]
}

const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionsTypes.ADD_FRUIT:
            return { fruits: [...state.fruits, { ...action.payload }] };
        case actionsTypes.REMOVE_FRUIT:
            return { fruits: state.fruits.filter(fruit => fruit.id !== action.payload.fruitId) };
        default:
            return state;
    };
};

export { reducers }