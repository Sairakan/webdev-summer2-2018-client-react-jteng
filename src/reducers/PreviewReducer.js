import { TOGGLE_PREVIEW } from '../constants/PreviewConstants';

let defaultState = false;

const preview = (state = defaultState, action) => {
    switch(action.type) {
        case(TOGGLE_PREVIEW):
            return !state;
        default: return state;
    }
}

export default preview;