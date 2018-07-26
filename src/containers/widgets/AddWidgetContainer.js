import { connect } from 'react-redux';

import { addWidget } from '../../actions/WidgetActions';
import AddWidgetComponent from '../../components/widgets/AddWidgetComponent';

const stateToPropsMapper = ({widget}) => ({
    widget
})

const dispatchToPropsMapper = (dispatch) => ({
    addWidget: () => addWidget(dispatch)
})

const AddWidgetContainer = connect(
    stateToPropsMapper,
    dispatchToPropsMapper)(AddWidgetComponent)

export default AddWidgetContainer