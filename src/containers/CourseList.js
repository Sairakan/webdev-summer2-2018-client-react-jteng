import React, { Component } from 'react';

export default class CourseList extends Component {
    render() {
        return (
            <div className="container-fluid">
                <TitleRow />
            </div>
        )
    }
}

class TitleRow extends Component {
    render() {
        return (
            <div className="row btn-primary container-fluid">
                <i className="fas fa-bars fa-lg my-auto mr-1"></i>
                <span className="my-auto mr-1">Course Manager</span>
                <input className="form-control col"
                    placeholder="New Course Title" />
                <div className="my-auto" id="addCourseDiv">
                    <i class="fas fa-plus-circle fa-2x" id="addCourseBtn"></i>
                </div>
            </div>
        )
    }
}

class CourseRow extends Component {
    render() {
        return (
            <div>
            </div>
        )
    }
}

class CourseCard extends Component {
    render() {
        return (
            <div className="card" styles={{ width: '18rem' }}>
                <img className="card-img-top"
                    src="https://picsum.photos/300/200" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Card text.</p>
                    <a href="#" className="btn btn-primary">More...</a>
                </div></div>)
    }
}