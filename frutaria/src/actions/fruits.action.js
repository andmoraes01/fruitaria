import { actionsTypes } from '../constants/fruits'

const actions = {
    add: fruit => ({
        type: actionsTypes.ADD_FRUIT,
        payload: fruit
    }),
    remove: fruitId => ({
        type: actionsTypes.REMOVE_FRUIT,
        payload: fruitId
    })
}

export { actions };