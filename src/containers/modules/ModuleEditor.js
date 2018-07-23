import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LessonService from '../../services/LessonService';
import LessonTab from '../../components/LessonTab';
import LessonEditor from '../lessons/LessonEditor';
import '../../styles/moduleeditor.style.css';

export default class ModuleEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            moduleId: '',
            lesson: {},
            lessons: []
        }
        this.LessonService = LessonService.instance;
        this.lessonTitle = React.createRef();
        this.findAllLessonsForModule = this.findAllLessonsForModule.bind(this);
        this.setLessons = this.setLessons.bind(this);
        this.setLessonTitle = this.setLessonTitle.bind(this);
        this.createLesson = this.createLesson.bind(this);
        this.deleteLesson = this.deleteLesson.bind(this);
        this.renderLessons = this.renderLessons.bind(this);
    }
    findAllLessonsForModule() {
        this.LessonService.findAllLessonsForModule(this.state.courseId, this.state.moduleId)
            .then(lessons => this.setLessons(lessons));
    }
    setLessons(lessons) {
        this.setState({ lessons: lessons });
    }
    setLessonTitle(event) {
        this.setState({
            lesson: {
                title: event.target.value
            }
        });
    }
    createLesson() {
        this.LessonService.createLesson(this.state.courseId, this.state.moduleId, this.state.lesson)
            .then(() => this.findAllLessonsForModule());
        this.lessonTitle.current.value = '';
    }
    deleteLesson(lessonId) {
        this.LessonService.deleteLesson(lessonId)
            .then(() => this.findAllLessonsForModule());
    }
    renderLessons() {
        let lessons = this.state.lessons.map(lesson =>
            <LessonTab
                key={lesson.id}
                lesson={lesson}
                currentURL={this.props.match.url}
                delete={this.deleteLesson} />
        );
        return (
            <ul className="nav nav-tabs" role="tablist">
                {lessons}
                <li className="nav-item">
                    <form id="addLessonForm" data-toggle="tab" role="tab"
                        className="form-inline nav-link m-0 p-0"
                        aria-selected="false"
                        onSubmit={e => e.preventDefault()}>
                        <div className="input-group">
                            <input className="form-control form-control-sm p-1"
                                onChange={this.setLessonTitle}
                                placeholder="New Lesson"
                                ref={this.lessonTitle} />
                            <i id="addModuleIcon" className="fas fa-plus ml-2 mt-2 text-primary" onClick={this.createLesson}></i>
                        </div>
                    </form>
                </li>
            </ul>
        )
    }
    componentDidMount() {
        this.setState({
            courseId: this.props.match.params.courseId,
            moduleId: this.props.match.params.moduleId
        }, () => this.findAllLessonsForModule());

    }
    componentWillReceiveProps(newProps) {
        this.setState({
            courseId: newProps.match.params.courseId,
            moduleId: newProps.match.params.moduleId
        }, () => this.findAllLessonsForModule());
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.lessons !== nextState.lessons
            || this.props !== nextProps) return true;
        else return false;
    }
    render() {
        return (
            <Router>
                <div className="container">
                    {this.renderLessons()}
                    <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId"
                        component={LessonEditor} />
                </div>
            </Router>
        )
    }
}