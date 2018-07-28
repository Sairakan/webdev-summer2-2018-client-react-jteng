import { connect } from 'react-redux';

import WidgetListComponent from '../../components/widgets/WidgetListComponent';
import { deleteWidget, updateWidget, loadWidgets, saveWidgets, moveUp, moveDown } from '../../actions/WidgetActions';
import { togglePreview } from '../../actions/PreviewActions';
import WidgetService from '../../services/WidgetService';

let widgetService = WidgetService.instance;

const stateToPropsMapper = (state) => ({
    widgets: state.widgets,
    preview: state.preview
})

const dispatchToPropsMapper = (dispatch) => ({
    deleteWidget: (widgetId) => deleteWidget(dispatch, widgetId),
    updateWidget: (widget) => updateWidget(dispatch, widget),
    loadAllWidgetsForTopic: (tId) => {
        widgetService.findAllWidgetsForTopic(tId)
            .then(widgets => loadWidgets(dispatch, widgets))
    },
    saveWidgets: (widgets) => saveWidgets(dispatch, widgets),
    togglePreview: (preview) => togglePreview(dispatch, preview),
    moveUp: (widgetIndex) => moveUp(dispatch, widgetIndex),
    moveDown: (widgetIndex) => moveDown(dispatch, widgetIndex)
})

const WidgetListContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(WidgetListComponent)

export default WidgetListContainer