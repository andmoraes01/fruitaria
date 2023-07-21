const actions = {
    add: fruit => ({
        type: 'ADD_FRUIT',
        payload: fruit
    }),
    remove: fruit_id => ({
        type: 'REMOVE_FRUIT',
        payload: fruit_id
    })
}

export { actions };