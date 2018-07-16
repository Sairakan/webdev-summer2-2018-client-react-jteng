import React from 'react';
import CourseList from './CourseList';

class CourseManager extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <CourseList />
            </div>
        )
    }
}

export default CourseManager;