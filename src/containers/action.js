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
function increment(value) {
    return {
        type: 'INCREMENT',
        value
    };
}

// action
function decrement(value) {
    return {
        type: 'DECREMENT',
        value
    };
}

function setList(data) {
    return {
        type: 'SET_LIST',
        data
    };
}

export { listItemClick, deleteListItem, inputSubmit, inputChange, increment, decrement, setList };
