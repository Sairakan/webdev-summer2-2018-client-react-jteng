import React from 'react';
import { Link } from 'react-router-dom';

export default class ModuleListItem extends React.Component {
    render() {
        return (
            <li className="list-group-item">
                <Link to={`/course/${this.props.courseId}/module/${this.props.module.id}`}>
                    <i className="far fa-folder text-primary mr-2"></i>
                    {this.props.module.title}
                </Link>
                <span className="float-right">
                    <i className="fas fa-times text-danger"
                        onClick={() => this.props.delete(this.props.module.id)}></i>
                </span>
            </li>
        )
    }
}