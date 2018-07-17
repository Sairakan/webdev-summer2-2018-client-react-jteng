import React, { Component } from 'react';
import ModuleList from './ModuleList';

export default class CourseEditor extends Component {
    constructor(props) {
        super(props);
        this.selectCourse = this.selectCourse.bind(this);
        this.state = { courseId: '' };
    }
    selectCourse(courseId) {
        this.setState({ courseId: courseId });
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
                <h3>Course {this.state.courseId}</h3>
                <ModuleList courseId={this.state.courseId} />
            </div>
        )
    }
}