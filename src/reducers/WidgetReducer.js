import { ADD_WIDGET, HEADING_WIDGET, DELETE_WIDGET, 
    UPDATE_WIDGET, SAVE_WIDGETS, LOAD_WIDGETS } from '../constants/WidgetConstants';

import WidgetService from '../services/WidgetService';

const widgetService = WidgetService.instance

let defaultWidget = (id) => ({
    id: id,
    type: HEADING_WIDGET,
    name: '',
    widgetIndex: 0,
    text: 'ipsum lorem',
    size: 1
})

let defaultState = []

const widgets = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_WIDGET:
            return [
                ...state,
                defaultWidget((new Date()).getTime())
            ]
        case DELETE_WIDGET:
            return state.filter(
                widget => widget.id !== action.widgetId
            )
        case UPDATE_WIDGET:
            return state.map(widget => {
                if (widget.id === action.widget.id) {
                    return action.widget
                } else {
                    return widget
                }
            })
        case SAVE_WIDGETS:
            widgetService.saveWidgets(action.widgets);
            return state;
        case LOAD_WIDGETS:
            return action.widgets;
        default: return state;
    }
}

export default widgets;