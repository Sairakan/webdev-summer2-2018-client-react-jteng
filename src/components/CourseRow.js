import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

export default class CourseRow extends React.Component {
    render() {
        return (
            <tr>
                <td>
                    <Link to={`/course/${this.props.course.id}/edit`}>
                        <i className="fas fa-folder text-primary mr-2"></i>
                        {this.props.course.title}
                    </Link>
                </td>
                <td>{this.props.owner}</td>
                <td><Moment fromNowDuring={this.yesterday()} date={this.props.course.modified} /></td>
                <td><i className="fas fa-times"
                    onClick={() => this.props.delete(this.props.course.id)}></i></td>
            </tr>
        )
    }
    yesterday() {
        var date = new Date();
        date.setDate(date.getDate() - 1);
        return date.getTime();
    }
}