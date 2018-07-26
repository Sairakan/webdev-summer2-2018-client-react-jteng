import { ADD_WIDGET, HEADING_WIDGET, DELETE_WIDGET, PARAGRAPH_WIDGET } from '../constants/WidgetConstants';

let defaultWidget = {
    id: 1,
    type: HEADING_WIDGET,
    name: '',
    widgetIndex: 0,
    text: 'ipsum lorem',
    size: 1
}

let defaultState = [{
    id: 1,
    type: HEADING_WIDGET,
    name: '',
    widgetIndex: 0,
    text: 'ipsum lorem',
    size: 1
},
{
    id: 2,
    type: PARAGRAPH_WIDGET,
    name: '',
    widgetIndex: 0,
    text: 'ipsum lorem',
}]

const widgets = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_WIDGET:
            return [
                ...state,
                defaultWidget
            ]
        case DELETE_WIDGET:
            console.log(action);
            return state.filter(
                widget => widget.id !== action.widgetId
            )
        default: return state;
    }
}

export default widgets;