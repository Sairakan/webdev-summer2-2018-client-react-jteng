import React from 'react';

export default class ModuleEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            moduleId: ''
        }
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
    }
    setCourseId(courseId) {
        this.setState({ courseId: courseId });
    }
    setModuleId(moduleId) {
        this.setState({ moduleId: moduleId });
    }
    componentDidMount() {
        this.setCourseId(this.props.match.params.courseId);
        this.setModuleId(this.props.match.params.moduleId);
    }
    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.match.params.courseId);
        this.setModuleId(newProps.match.params.moduleId);
    }
    render() {
        return (
            <div>
                <ul class="nav nav-tabs">
                    <li class="nav-item"><a class="nav-link active"
                        href="#">Active Tab</a></li>
                    <li class="nav-item"><a class="nav-link"
                        href="#">Another Tab</a></li>
                </ul>
                <h1>Module Editor</h1>
                {this.state.courseId},
                {this.state.moduleId}
            </div>
        )
    }
}