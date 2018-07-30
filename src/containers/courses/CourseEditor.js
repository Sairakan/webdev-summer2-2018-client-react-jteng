import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ModuleList from '../modules/ModuleList';
import CourseService from '../../services/CourseService';
import '../../styles/courseeditor.style.css';

export default class CourseEditor extends Component {
    constructor(props) {
        super(props);
        this.courseService = CourseService.instance;
        this.state = { course: {} };
        this.selectCourse = this.selectCourse.bind(this);
    }
    selectCourse(courseId) {
        this.courseService.findCourseById(courseId)
            .then(course => {
                this.setState({ course: (course ? course : {})});
            });
    }
    componentDidMount() {
        this.selectCourse(this.props.match.params.courseId);
    }
    componentWillReceiveProps(newProps) {
        this.selectCourse(newProps.match.params.courseId);
    }
    render() {
        return (
            <div>
                <div className="bg-primary py-1">
                    <Link to={`/course/list`} className="mx-2">
                        <i className="fas fa-2x fa-times text-white-50"></i>
                    </Link>
                    <span className="h3 text-white">Course Manager</span>
                </div>
                <ModuleList course={this.state.course} />
            </div>
        )
    }
}