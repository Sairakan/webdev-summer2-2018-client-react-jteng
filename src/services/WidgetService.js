import {HOSTNAME as HOST} from './const-url';

let _singleton = Symbol();
const WIDGET_API_URL = HOST + '/api/topic/{tId}/widget';
export default class WidgetService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new WidgetService(_singleton);
        return this[_singleton];
    }
    findAllWidgets() {
        return fetch(HOST + '/api/widget')
            .then(response => response.json())
    }
    findWidgetById(wId) {
        return fetch(HOST + '/api/widget/' + wId)
            .then(response => response.json())
    }
    findAllWidgetsForTopic(tId) {
        return fetch(WIDGET_API_URL.replace('{tId}', tId))
            .then(response => response.json())
    }
    createWidget(tId, widget) {
        return fetch(WIDGET_API_URL.replace('{tId}', tId), {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(widget)
        }).then(response => response.json());
    }
    updateWidget(wId, widget) {
        return fetch(HOST + '/api/widget/' + wId, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(widget)
        })
    }
    deleteWidget(wId) {
        return fetch(HOST + '/api/widget/' + wId, {
            method: 'delete'
        });
    }
    saveWidgets(widgets) {
        fetch(HOST+'/api/widget', {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(widgets)
        })
    }
}