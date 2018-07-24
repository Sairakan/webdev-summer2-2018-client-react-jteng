import React from 'react';
import {Link} from 'react-router-dom';

export default class TopicPill extends React.Component {
    render() {
        return (
            <li className="nav-item">
                <Link className="nav-link" role="tab" to={`${this.props.currentURL}/topic/${this.props.topic.id}`}>
                    {this.props.topic.title}
                    <i className="fas fa-times text-danger ml-1"
                        data-toggle="modal"
                        data-target={`#deleteTopicModal${this.props.topic.id}`}></i>
                </Link>
                <div className="modal fade" id={`deleteTopicModal${this.props.topic.id}`} tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Delete Topic</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete this topic?</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-primary" onClick={() => this.props.delete(this.props.topic.id)} data-dismiss="modal">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}