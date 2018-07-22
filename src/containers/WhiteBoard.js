import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CourseList from './courses/CourseList';
import CourseEditor from './courses/CourseEditor';
import '../styles/whiteboard.style.css';

class WhiteBoard extends React.Component {
    render() {
        document.title = 'Whiteboard';
        return (
            <Router>
                <div>
                    <Route exact path='/' 
                        component={() => window.location = '/course/list'} />
                    <Route path="/course/list"
                        component={CourseList} />
                    <Route path="/course/:courseId/edit"
                        component={CourseEditor} />
                    <Route path='/course/:courseId/module/:moduleId'
                        component = {CourseEditor} />
                </div>
            </Router>
        )
    }
}
export default WhiteBoard;