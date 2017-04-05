const initialState = {x: NaN, y: NaN};

export default function mouseMove(state = initialState, action) {
    if (action.type === 'MOUSE_MOVE') {
        return action.payload;
    }

    return state;
}