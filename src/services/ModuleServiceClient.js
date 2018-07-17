let _singleton = Symbol();
const MODULE_API_URL = 'http://localhost:8080/api/course/CID/module';
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
    createModule(courseId, module) {
        return fetch(MODULE_API_URL.replace('CID', courseId), {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(module)
        }).then(response => response.json());
    }
    findAllModulesForCourse(courseId) {
        return fetch(MODULE_API_URL.replace('CID', courseId))
            .then(response => response.json());
    }
    deleteModule(moduleId) {
        return fetch('http://localhost:8080/api/module/MODULE_ID'.replace('MODULE_ID', moduleId), {
            method: 'delete'
        });
    }
}