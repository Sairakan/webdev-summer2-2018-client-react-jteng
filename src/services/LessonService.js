import {HOSTNAME as HOST} from './const-url';

let _singleton = Symbol();
const LESSON_API_URL = HOST + '/api/course/CID/module/MID/lesson';
export default class ModuleService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new ModuleService(_singleton);
        return this[_singleton];
    }
    createLesson(courseId, moduleId, lesson) {
        return fetch(LESSON_API_URL.replace('CID', courseId).replace('MID', moduleId), {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(lesson)
        }).then(response => response.json());
    }
    findAllLessonsForModule(courseId, moduleId) {
        return fetch(LESSON_API_URL.replace('CID', courseId).replace('MID', moduleId))
            .then(response => response.json());
    }
    deleteLesson(lessonId) {
        return fetch(HOST + '/api/lesson/LESSON_ID'.replace('LESSON_ID', lessonId), {
            method: 'delete'
        });
    }
}