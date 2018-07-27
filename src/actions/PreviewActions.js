import { TOGGLE_PREVIEW } from '../constants/PreviewConstants';

export const togglePreview = (dispatch, preview) => {
    console.log(preview);
    dispatch({
        type: TOGGLE_PREVIEW,
        preview: preview
    })
}