

const shopReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            //Check if item is already in cart 
            const inCart = state.find((item) => item.id === action.payload.id) ? true : false;
            return inCart ? state.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item) : [...state, {...action.payload, qty: 1}]
        case 'REMOVE_FROM_CART':
            return state.filter((cartItem) => cartItem.id !== action.payload.id)
        case 'ADJUST_QTY':
            return state.map((item) => item.id === action.payload.id ? { ...item, qty: action.payload.qty } : item)
        default:
            return state
    }
}

export default shopReducer;