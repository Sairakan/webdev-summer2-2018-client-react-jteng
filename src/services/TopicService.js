import {HOSTNAME as HOST} from './const-url';

let _singleton = Symbol();
const LESSON_API_URL = HOST + '/api/course/CID/module/MID/lesson/LID/topic';
export default class TopicService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new TopicService(_singleton);
        return this[_singleton];
    }
    createTopic(courseId, moduleId, lessonId, topic) {
        return fetch(LESSON_API_URL.replace('CID', courseId)
            .replace('MID', moduleId).replace('LID', lessonId), {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(topic)
        }).then(response => response.json());
    }
    findAllTopicsForLesson(courseId, moduleId, lessonId) {
        return fetch(LESSON_API_URL.replace('CID', courseId)
            .replace('MID', moduleId).replace('LID', lessonId))
            .then(response => response.json());
    }
    deleteTopic(topicId) {
        return fetch(HOST + '/api/topic/TID'.replace('TID', topicId), {
            method: 'delete'
        });
    }
}