import React from 'react';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import WidgetListContainer from '../widgets/WidgetListContainer';
import AddWidgetContainer from '../widgets/AddWidgetContainer';
import widgets from '../../reducers/WidgetReducer';
import preview from '../../reducers/PreviewReducer';
import deletedWidgets from '../../reducers/DeletedWidgetsReducer';


class TopicEditor extends React.Component {
    render() {
        const rootReducer = combineReducers({ widgets, preview, deletedWidgets })
        const store = createStore(rootReducer)

        const WidgetApp = () => (
            <div>
                <WidgetListContainer />
                <AddWidgetContainer />
            </div>
        )
        
        return (
            <Provider store={store}>
                <WidgetApp />
            </Provider>
        )
    }
}

export default TopicEditor