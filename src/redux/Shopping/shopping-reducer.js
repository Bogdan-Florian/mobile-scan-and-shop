

const shopReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            //Check if item is already in cart 
            const inCart = state.find((item) => item.id === action.payload.id) ? true : false;
            return inCart ? state.map((item) => item.id === action.payload.id ? {id: item.id, description: item.description, price: item.price , product_image: item.product_image , qty: item.qty + 1 } : item) : [...state, { id: action.payload.id, description: action.payload.description , price: action.payload.price, product_image: action.payload.product_image, qty: 1}]
        case 'REMOVE_FROM_CART':
            return state.filter((cartItem) => cartItem.id !== action.payload.id)
        case 'ADJUST_QTY':
            return state.map((item) => item.id === action.payload.id ? { ...item, qty: action.payload.qty } : item)
        default:
            return state
    }
}

export default shopReducer;