import { TOGGLE_PREVIEW } from '../constants/PreviewConstants';

let defaultState = false;

const preview = (preview = defaultState, action) => {
    switch(action.type) {
        case(TOGGLE_PREVIEW):
            return !preview;
        default: return preview;
    }
}

export default preview;