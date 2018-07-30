import React from 'react';
import { Link } from 'react-router-dom';

export default class ModuleListItem extends React.Component {
    render() {
        console.log(this.props);
        return (
            <li className="list-group-item">
                <Link to={`/course/${this.props.courseId}/module/${this.props.module.id}/edit`}>
                    <i className="far fa-folder text-primary mr-2"></i>
                    {this.props.module.title}
                </Link>
                <span className="float-right">
                    <i className="fas fa-times text-danger"
                        data-toggle="modal"
                        data-target={`#deleteModuleModal${this.props.module.id}`}></i>
                </span>
                <div className="modal fade" id={`deleteModuleModal${this.props.module.id}`} tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Delete Module</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete this module?</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-primary" onClick={() => this.props.delete(this.props.module.id)} data-dismiss="modal">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}