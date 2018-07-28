import { SAVE_WIDGETS, DELETE_WIDGET } from '../constants/WidgetConstants';

import WidgetService from '../services/WidgetService';

const widgetService = WidgetService.instance

let defaultState = [];

const deletedWidgets = (deleted = defaultState, action) => {
    switch (action.type) {
        case (DELETE_WIDGET):
            return [
                ...deleted,
                action.widgetId
            ]
        case (SAVE_WIDGETS):
            deleted.map(wId => {
                if (wId % 10 !== 5)
                    widgetService.deleteWidget(wId)
                return null
            })
            return []
        default: return deleted;
    }
}

export default deletedWidgets;