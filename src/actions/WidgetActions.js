import { ADD_WIDGET, DELETE_WIDGET, UPDATE_WIDGET, SAVE_WIDGETS, 
    LOAD_WIDGETS, 
    MOVE_UP,
    MOVE_DOWN} from '../constants/WidgetConstants';

export const moveUp = (dispatch, widgetIndex) => {
    dispatch({
        type: MOVE_UP,
        widgetIndex: widgetIndex
    })
}

export const moveDown = (dispatch, widgetIndex) => {
    dispatch({
        type: MOVE_DOWN,
        widgetIndex: widgetIndex
    })
}

export const addWidget = (dispatch) => {
    dispatch({
        type: ADD_WIDGET
    })
}

export const deleteWidget = (dispatch, widgetId) => {
    dispatch({
        type: DELETE_WIDGET,
        widgetId: widgetId
    })
}

export const updateWidget = (dispatch, widget) => {
    dispatch({
        type: UPDATE_WIDGET,
        widget: widget
    })
}

export const saveWidgets = (dispatch, widgets) => {
    dispatch({
        type: SAVE_WIDGETS,
        widgets: widgets
    })
}

export const loadWidgets = (dispatch, widgets) => {
    dispatch({
        type: LOAD_WIDGETS,
        widgets: widgets
    })
}