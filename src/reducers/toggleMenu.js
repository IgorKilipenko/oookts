const initialState = false;

export default function toggleMenu(state = initialState, action) {
    if (action.type === 'TOGGLE_MENU_OPEN') {
        return action.payload;
    }

    return state;
}