let _singleton = Symbol();
const COURSE_API_URL = 'http://localhost:8080/api/course';
export default class CourseService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new CourseService(_singleton);
        return this[_singleton];
    }
    findAllCourses() {
        return fetch(COURSE_API_URL)
            .then(response => response.text())
            .then(text => {
                if (text === '') {
                    return [];
                } else {
                    return JSON.parse(text);
                }
            });
    }
    findCourseById(cId) {
        return fetch(COURSE_API_URL+'/'+cId)
            .then(response => response.text())
            .then(text => {
                if (text === '') return null;
                else return JSON.parse(text)
            });
    }
    createCourse(course) {
        return fetch(COURSE_API_URL, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(course)
        }).then(response => response.json());
    }
    deleteCourse(courseId) {
        return fetch(COURSE_API_URL + '/' + courseId, {
            method: 'delete'
        });
    }
    findCourseOwner(courseId) {
        return fetch(COURSE_API_URL+'/'+courseId+'/owner')
            .then(response => response.text())
            .then(text => {
                if (text === '') return null;
                else return JSON.parse(text);
            });
    }
}