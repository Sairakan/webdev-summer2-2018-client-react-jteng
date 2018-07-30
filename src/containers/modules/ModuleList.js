import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ModuleService from '../../services/ModuleService';
import ModuleListItem from '../../components/ModuleListItem';
import ModuleEditor from './ModuleEditor';

export default class ModuleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            course: {},
            module: { title: '' },
            modules: []
        };
        this.ModuleService = ModuleService.instance;
        this.moduleTitle = React.createRef();
        this.setCourse = this.setCourse.bind(this);
        this.setModuleTitle = this.setModuleTitle.bind(this);
        this.createModule = this.createModule.bind(this);
        this.findAllModulesForCourse = this.findAllModulesForCourse.bind(this);
        this.setModules = this.setModules.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
    }
    setCourse(course) {
        this.setState({ course: course });
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
            this.state.course.id, this.state.module)
            .then(() => this.findAllModulesForCourse(this.state.course.id));
        this.moduleTitle.current.value = '';
    }
    findAllModulesForCourse(courseId) {
        this.ModuleService.findAllModulesForCourse(courseId)
            .then(modules => this.setModules(modules));
    }
    setModules(modules) {
        this.setState({ modules: (modules ? modules : [])});
    }
    deleteModule(moduleId) {
        this.ModuleService.deleteModule(moduleId)
            .then(() => this.findAllModulesForCourse(this.state.course.id));
    }
    componentDidMount() {
        this.setCourse(this.props.course);
    }
    componentWillReceiveProps(newProps) {
        this.setCourse(newProps.course);
        this.findAllModulesForCourse(newProps.course.id);
    }
    renderModules() {
        let modules = this.state.modules
            .map(module =>
                <ModuleListItem
                    key={module.id}
                    module={module}
                    courseId={this.state.course.id}
                    delete={this.deleteModule} />);
        return (
            <ul className="list-group">
                {modules}
                <li id="moduleInputForm" className="list-group-item">
                    <form className="form-inline" onSubmit={e => e.preventDefault()}>
                        <div className="input-group">
                            <input className="form-control form-control-sm"
                                onChange={this.setModuleTitle}
                                placeholder="New Module"
                                ref={this.moduleTitle} />
                            <i id="addModuleIcon" className="fas fa-plus ml-2 mt-2 text-primary" onClick={this.createModule}></i>
                        </div>
                    </form>
                </li>
            </ul >
        );
    }
    render() {
        return (
            <Router>
                <div className='row'>
                    <div className='px-4 col-4'>
                        <h3>{this.state.course.title}</h3>
                        <h4>Modules</h4>
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