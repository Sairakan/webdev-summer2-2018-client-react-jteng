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
        }).then(response => response);
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





// function CourseServiceClient() {
//     this.createCourse = createCourse;
//     this.deleteCourse = deleteCourse;
//     this.findAllCourses = findAllCourses;
//     this.findCourseById = findCourseById;
//     this.updateCourse = updateCourse;
//     this.url = '/api/course';
//     var self = this;

//     function createCourse(course, callback) {
//         return fetch(self.url, {
//             method: 'post',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(course)
//         });
//     }
//     function deleteCourse(courseId, callback) {
//         return fetch(self.url + '/' + courseId, 
//             { method: 'delete', }
//         );
//     }
//     function findAllCourses(callback) {
//         return fetch(self.url, {
//             method: 'get'
//         });
//     }
//     function findCourseById(courseId, callback) {
//         return fetch(self.url + '/' + courseId, {
//             method: 'get'
//         });
//     }
//     function updateCourse(courseId, course, callback) {
//         return fetch(self.rul + '/' + courseId, {
//             method: 'put',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(course)
//         });
//     }
// }