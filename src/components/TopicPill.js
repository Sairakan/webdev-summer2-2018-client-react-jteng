import React from 'react';
import {Link} from 'react-router-dom';

export default class TopicPill extends React.Component {
    render() {
        return (
            <li className="nav-item">
                <Link className="nav-link" role="tab" to={`${this.props.currentURL}/topic/${this.props.topic.id}`}>
                    {this.props.topic.title}
                    <i className="fas fa-times"
                        onClick={() => this.props.delete(this.props.topic.id)}></i>
                </Link>
            </li>
        )
    }
}