// Action
function listItemClick(index) {
    return {
        type: 'LIST_ITEM_CLICK',
        index
    };
}

// Action
function deleteListItem(index) {
    return {
        type: 'DELETE_LIST_ITEM',
        index
    };
}

// Action
function inputSubmit() {
    return {
        type: 'INPUT_SUBMIT'
    };
}

// Action
function inputChange(value) {
    return {
        type: 'INPUT_CHANGED',
        value
    };
}

// action
function increment() {
    return {
        type: 'INCREMENT'
    };
}

// action
function decrement() {
    return {
        type: 'DECREMENT'
    };
}

export { listItemClick, deleteListItem, inputSubmit, inputChange, increment, decrement };
