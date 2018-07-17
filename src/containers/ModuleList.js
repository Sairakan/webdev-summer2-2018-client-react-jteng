import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ModuleService from '../services/ModuleServiceClient';
import ModuleListItem from '../components/ModuleListItem';
import ModuleEditor from './ModuleEditor';

export default class ModuleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            module: { title: '' },
            modules: []
        };
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleTitle = this.setModuleTitle.bind(this);
        this.createModule = this.createModule.bind(this);
        this.findAllModulesForCourse = this.findAllModulesForCourse.bind(this);
        this.setModules = this.setModules.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
        this.ModuleService = ModuleService.instance;
    }
    setCourseId(courseId) {
        this.setState({ courseId: courseId });
    }
    setModuleTitle(event) {
        this.setState({
            module: {
                title: event.target.value
            }
        });
    }
    createModule() {
        this.ModuleService.createModule(
            this.state.courseId, this.state.module)
            .then(() => this.findAllModulesForCourse(this.state.courseId));
    }
    findAllModulesForCourse(courseId) {
        this.ModuleService.findAllModulesForCourse(courseId)
            .then(modules => this.setModules(modules));
    }
    setModules(modules) {
        this.setState({ modules: modules });
    }
    deleteModule(moduleId) {
        this.ModuleService.deleteModule(moduleId)
            .then(() => this.findAllModulesForCourse(this.state.courseId));
    }
    componentDidMount() {
        this.setCourseId(this.props.courseId);
    }
    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.courseId);
        this.findAllModulesForCourse(newProps.courseId);
    }
    renderModules() {
        let modules = this.state.modules
            .map(module =>
                <ModuleListItem
                    key={module.id}
                    module={module}
                    courseId={this.state.courseId}
                    delete={this.deleteModule} />);
        console.log(this.state);
        return (
            <ul>{modules}</ul>
        );
    }
    render() {
        return (
            <Router>
                <div className='row'>
                    <div className='col-4'>
                        <h4>Module List for courseId: {this.state.courseId}</h4>
                        <input value={this.state.module.title}
                            onChange={this.setModuleTitle}
                            placeholder="New Module" />
                        <button onClick={this.createModule}>Create</button>
                        {this.renderModules()}
                    </div>
                    <div className='col-8'>
                        <Route path="/course/:courseId/module/:moduleId"
                            component={ModuleEditor} />
                    </div>
                </div>
            </Router>
        )
    }
}