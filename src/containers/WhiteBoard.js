import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CourseList from './CourseList';
import CourseEditor from './CourseEditor';

class WhiteBoard extends React.Component {
    render() {
        document.title = 'Whiteboard';
        return (
            <Router>
                <div>
                    <Route path="/course/list"
                        component={CourseList}>
                    </Route>
                    <Route path="/course/:courseId/edit"
                        component={CourseEditor}>
                    </Route>
                </div>
            </Router>
        )
    }
}
export default WhiteBoard;