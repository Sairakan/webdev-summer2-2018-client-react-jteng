import React from 'react';
import { Link } from 'react-router-dom';

export default class LessonTab extends React.Component {
    render() {
        return (
            <li className="nav-item">
                <Link className="nav-link" data-toggle="tab"
                    role="tab" aria-selected="false"
                    to={`${this.props.currentURL}/lesson/${this.props.lesson.id}`}>
                    {this.props.lesson.title}
                    <i className="fas fa-times text-danger ml-1"
                        onClick={() => this.props.delete(this.props.lesson.id)}></i>
                </Link>
            </li>
        )
    }
}