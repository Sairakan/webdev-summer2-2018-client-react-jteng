import React, { Component } from 'react';
import CourseRow from '../components/CourseRow';
import CourseService from '../services/CourseServiceClient'
//import ModuleList from './modules/ModuleList';

export default class CourseList extends Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.state = {courses: []};
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
    }
    componentDidMount() {
        this.findAllCourses();
    }
    render() {
        return (
            <div className="container-fluid">
                <h2>Course List</h2>
                <table className="table">
                    <thead>
                        <tr><th>Course Title</th></tr>
                        <tr>
                            <th><input onChange={this.titleChanged} id="titleFld" placeholder="cs101" /></th>
                            <th><button className="btn-primary" onClick={this.createCourse}>Add</button></th>
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
            return <CourseRow course={course} key={course.id}
                                delete={this.deleteCourse} />
        });
        return rows;
    }
    titleChanged(event) {
        this.setState({
            course: {title: event.target.value}
        });
    }
    createCourse() {
        this.courseService
            .createCourse(this.state.course)
            .then(() => this.findAllCourses());
    }
    findAllCourses() {
        this.courseService.findAllCourses()
            .then(courses => {
                this.setState({courses: courses});
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