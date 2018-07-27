import { connect } from 'react-redux';

import WidgetListComponent from '../../components/widgets/WidgetListComponent';
import { deleteWidget, updateWidget } from '../../actions/WidgetActions';

const stateToPropsMapper = (state) => ({
    widgets: state.widgets
})

const dispatchToPropsMapper = (dispatch) => ({
    deleteWidget: (widgetId) => deleteWidget(dispatch, widgetId),
    updateWidget: (widget) => updateWidget(dispatch, widget)
})

const WidgetListContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(WidgetListComponent)

export default WidgetListContainer