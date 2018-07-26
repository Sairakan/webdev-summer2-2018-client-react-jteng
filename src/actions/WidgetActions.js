import { ADD_WIDGET, DELETE_WIDGET } from '../constants/WidgetConstants';

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