import { connect } from 'react-redux';

import { deleteWidget } from '../../actions/WidgetActions';
import WidgetComponent from '../../components/widgets/WidgetComponent';

const stateToPropsMapper = ({widget}) => ({
    widget
})

const dispatchToPropsMapper = (dispatch) => ({
    deleteWidget: () => deleteWidget(dispatch)
})

const WidgetContainer = connect(
    stateToPropsMapper,
    dispatchToPropsMapper)(WidgetComponent)

export default WidgetContainer