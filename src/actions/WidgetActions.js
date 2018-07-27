import { ADD_WIDGET, DELETE_WIDGET, UPDATE_WIDGET } from '../constants/WidgetConstants';

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
    console.log(widget);
    dispatch({
        type: UPDATE_WIDGET,
        widget: widget
    })
}