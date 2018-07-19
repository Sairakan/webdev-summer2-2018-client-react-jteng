import React, { Component } from 'react';
import Async from 'react-promise';
import CourseRow from '../../components/CourseRow';
import CourseService from '../../services/CourseService'

export default class CourseList extends Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.state = { courses: [] };
        this.courseTitle = React.createRef();
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
    }
    componentDidMount() {
        this.findAllCourses();
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.courses !== nextState.courses
            || this.props !== nextProps) return true;
        else return false;
    }
    render() {
        return (
            <div>
                <table className="table table-borderless bg-primary my-0">
                    <thead>
                        <tr>
                            <th id="menuIconCol">
                                <i className="fas fa-2x fa-bars text-white"></i>
                            </th>
                            <th id="courseManagerHeaderCol">
                                <span className="h3 text-white">Course Manager</span>
                            </th>
                            <th id="courseNameInputCol">
                                <input className="form-control" 
                                    onChange={this.titleChanged} 
                                    id="titleFld" 
                                    placeholder="Course Title" 
                                    ref={this.courseTitle} />
                            </th>
                            <th>
                                <i className="fas fa-2x fa-plus-circle text-danger float-left"
                                    onClick={this.createCourse}></i>
                            </th>
                        </tr>
                    </thead>
                </table>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Course Title</th>
                            <th>Owner</th>
                            <th>Last Modified</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.courseRows()}
                    </tbody>
                </table>
            </div>
        )
    }
    courseRows() {
        var rows = this.state.courses.map(course => {
            var usernamePromise = this.courseService.findCourseOwner(course.id)
                .then(user => {
                    var username;
                    if (user == null) username = '';
                    else username = user.username;
                    return username;
                });
            return <Async key={course.id}
                promise={usernamePromise}
                then={username => <CourseRow
                    key={course.id}
                    course={course}
                    delete={this.deleteCourse}
                    owner={username} />} />
        });
        return rows;
    }
    titleChanged(event) {
        this.setState({
            course: {
                title: event.target.value
            }
        });
    }
    createCourse() {
        let course = { ...this.state.course };
        if (course.title === '' || !course.title) course.title = 'New Course';
        course.created = new Date();
        course.modified = new Date();
        this.courseService
            .createCourse(course)
            .then(() => this.findAllCourses());
        this.courseTitle.current.value = '';
    }
    findAllCourses() {
        this.courseService.findAllCourses()
            .then(courses => {
                this.setState({ courses: courses });
            });
    }
    deleteCourse(courseId) {
        this.courseService.deleteCourse(courseId)
            .then(() => this.findAllCourses());
    }
}