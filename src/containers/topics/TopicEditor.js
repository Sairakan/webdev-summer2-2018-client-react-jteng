import React from 'react';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import WidgetListContainer from '../widgets/WidgetListContainer';
import AddWidgetContainer from '../widgets/AddWidgetContainer';
import widgets from '../../reducers/WidgetReducer';
import preview from '../../reducers/PreviewReducer';
import deletedWidgets from '../../reducers/DeletedWidgetsReducer';

const rootReducer = combineReducers({ widgets, preview, deletedWidgets })
const s = createStore(rootReducer);

const configureStore = (store) => {
    if (module.hot) {
        const nextRootReducer = combineReducers({ widgets, preview, deletedWidgets });
        store.replaceReducer(nextRootReducer);
    }
  
    return store;
  }

class TopicEditor extends React.Component {
    render() {

        const WidgetApp = () => (
            <div>
                <WidgetListContainer />
                <AddWidgetContainer />
            </div>
        )
        
        return (
            <Provider store={configureStore(s)}>
                <WidgetApp />
            </Provider>
        )
    }
}

export default TopicEditor