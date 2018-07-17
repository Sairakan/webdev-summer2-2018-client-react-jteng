import React from 'react';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
export default class CourseRow extends React.Component {
    render() {
        return (
            <tr>
                <td>
                    <Link to={`/course/${this.props.course.id}/edit`}>
                        {this.props.course.title}
                    </Link>
                </td>
                <td>{this.props.course.owner}</td>
                <td><Moment fromNowDuring={this.yesterday()} date={this.props.course.modified} /></td>
                <td><button onClick={() => this.props.delete(this.props.course.id)}>Delete</button></td>
            </tr>
        )
    }
    yesterday() {
        var date = new Date();
        date.setDate(date.getDate()-1);
        return date.getTime();
    }
}