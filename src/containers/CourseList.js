import React, { Component } from 'react';
import Async from 'react-promise';
import CourseRow from '../components/CourseRow';
import CourseService from '../services/CourseServiceClient'

export default class CourseList extends Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.state = { courses: [] };
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
                <div className="container-fluid row">
                    <div className="col col-sm-1">
                        <i className="fas fa-2x fa-bars"></i>
                    </div>
                    <div className="col col-sm-4">
                        <span className="h2">Course Manager</span>
                    </div>
                    <div className="col col-lg-auto">
                        <input className="form-control" onChange={this.titleChanged} id="titleFld" placeholder="Course Title" />
                    </div>
                    <div className="col col-sm-1">
                        <i className="fas fa-2x fa-plus float-right my-2" onClick={this.createCourse}></i>
                    </div>
                </div>
                <div className="container-fluid">
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

// class TitleRow extends Component {
//     render() {
//         return (
//             <div className="row btn-primary container-fluid">
//                 <i className="fas fa-bars fa-lg my-auto mr-1"></i>
//                 <span className="my-auto mr-1">Course Manager</span>
//                 <input className="form-control col"
//                     placeholder="New Course Title" />
//                 <div className="my-auto" id="addCourseDiv">
//                     <i class="fas fa-plus-circle fa-2x" id="addCourseBtn"></i>
//                 </div>
//             </div>
//         )
//     }
// }

// class CourseCard extends Component {
//     render() {
//         return (
//             <div className="card" styles={{ width: '18rem' }}>
//                 <img className="card-img-top"
//                     src="https://picsum.photos/300/200" />
//                 <div className="card-body">
//                     <h5 className="card-title">Card title</h5>
//                     <p className="card-text">Card text.</p>
//                     <a href="#" className="btn btn-primary">More...</a>
//                 </div></div>)
//     }
// }