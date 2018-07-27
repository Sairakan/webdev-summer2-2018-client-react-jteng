import { ADD_WIDGET, HEADING_WIDGET, DELETE_WIDGET, 
    UPDATE_WIDGET, SAVE_WIDGETS, LOAD_WIDGETS } from '../constants/WidgetConstants';

import WidgetService from '../services/WidgetService';

const widgetService = WidgetService.instance
let url = window.location.href;
let tId = url.slice(url.search('topic') + 6);

let defaultWidget = () => ({
    type: HEADING_WIDGET,
    name: '',
    widgetIndex: 0,
    text: 'lorem ipsum',
    size: 1
})

let defaultState = []

const widgets = (widgets = defaultState, action) => {
    switch (action.type) {
        case ADD_WIDGET:
            return [
                ...widgets,
                defaultWidget()
            ]
        case DELETE_WIDGET:
            console.log(widgets);
            return widgets.filter(
                widget => widget.id !== action.widgetId
            )
        case UPDATE_WIDGET:
            return widgets.map(widget => {
                if (widget.id === action.widget.id) {
                    return action.widget
                } else {
                    return widget
                }
            })
        case SAVE_WIDGETS:
            console.log(widgets);
            widgetService.saveWidgets(tId, widgets);
            return widgets;
        case LOAD_WIDGETS:
            return action.widgets;
        default: return widgets;
    }
}

export default widgets;