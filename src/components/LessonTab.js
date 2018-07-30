import React from 'react';
import { Link } from 'react-router-dom';

export default class LessonTab extends React.Component {
    render() {
        return (
            <li className="nav-item">
                <Link className="nav-link d-inline-block"
                    role="tab" aria-selected="false"
                    to={`${this.props.currentURL}/lesson/${this.props.lesson.id}`}>
                    {this.props.lesson.title}
                </Link>
                <i className="fas fa-times text-danger d-inline-block mr-1"
                    data-toggle="modal"
                    data-target={`#deleteLessonModal${this.props.lesson.id}`}></i>
                <div className="modal fade" id={`deleteLessonModal${this.props.lesson.id}`} tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Delete Lesson</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete this lesson?</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-primary" onClick={() => this.props.delete(this.props.lesson.id)} data-dismiss="modal">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}