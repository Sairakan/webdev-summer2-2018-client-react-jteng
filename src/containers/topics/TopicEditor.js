import React from 'react';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import WidgetListContainer from '../widgets/WidgetListContainer';
import AddWidgetContainer from '../widgets/AddWidgetContainer';
import widgets from '../../reducers/WidgetReducer';
import preview from '../../reducers/PreviewReducer';

const rootReducer = combineReducers({widgets, preview})
const store = createStore(rootReducer)

const WidgetApp = () => (
    <div>
        <WidgetListContainer />
        <AddWidgetContainer />
    </div>
)

const TopicEditor = () => (
    <Provider store={store}>
        <WidgetApp />
    </Provider>
)

export default TopicEditor