function CourseServiceClient() {
    this.createCourse = createCourse;
    this.deleteCourse = deleteCourse;
    this.findAllCourses = findAllCourses;
    this.findCourseById = findCourseById;
    this.updateCourse = updateCourse;
    this.url = '/api/course';
    var self = this;

    function createCourse(course, callback) {
        return fetch(self.url, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(course)
        });
    }
    function deleteCourse(courseId, callback) {
        return fetch(self.url + '/' + courseId, 
            { method: 'delete', }
        );
    }
    function findAllCourses(callback) {
        return fetch(self.url, {
            method: 'get',
        });
    }
    function findCourseById(courseId, callback) {
        return fetch(self.url + '/' + courseId, {
            method: 'get',
        });
    }
    function updateCourse(courseId, course, callback) {
        return fetch(self.rul + '/' + courseId, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(course)
        });
    }
}