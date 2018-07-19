import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TopicService from '../../services/TopicService';
import TopicPill from '../../components/TopicPill';

export default class LessonEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            moduleId: '',
            lessonId: '',
            topic: {},
            topics: []
        }
        this.TopicService = TopicService.instance;
        this.topicTitle = React.createRef();
        this.findAllTopicsForLesson = this.findAllTopicsForLesson.bind(this);
        this.setTopics = this.setTopics.bind(this);
        this.setTopicTitle = this.setTopicTitle.bind(this);
        this.createTopic = this.createTopic.bind(this);
        this.deleteTopic = this.deleteTopic.bind(this);
        this.renderTopics = this.renderTopics.bind(this);
    }
    findAllTopicsForLesson() {
        this.TopicService.findAllTopicsForLesson(this.state.courseId, this.state.moduleId, this.state.lessonId)
            .then(topics => this.setTopics(topics));
    }
    setTopics(topics) {
        this.setState({ topics: topics });
    }
    setTopicTitle(event) {
        this.setState({
            topic: {
                title: event.target.value
            }
        });
    }
    createTopic() {
        this.TopicService.createTopic(this.state.courseId, this.state.moduleId, this.state.lessonId, this.state.topic)
            .then(() => this.findAllTopicsForLesson());
        this.topicTitle.current.value = '';
    }
    deleteTopic(topicId) {
        this.TopicService.deleteTopic(topicId)
            .then(() => this.findAllTopicsForLesson());
    }
    renderTopics() {
        let topics = this.state.topics.map(topic =>
            <TopicPill
                key={topic.id}
                topic={topic}
                currentURL = {this.props.match.url}
                delete={this.deleteTopic} />
        );
        return (
            <ul className="nav nav-pills" role="tablist">
                {topics}
                <li className="nav-item">
                    <form id="addLessonForm" className="form-inline" onSubmit={e => e.preventDefault()}>
                        <div className="input-group">
                            <input className="form-control form-control-sm px-1"
                                onChange={this.setTopicTitle}
                                placeholder="New Lesson"
                                ref={this.topicTitle} />
                            <i id="addModuleIcon" className="fas fa-plus ml-2 mt-2 text-primary" onClick={this.createTopic}></i>
                        </div>
                    </form>
                </li>
            </ul>
        )
    }
    componentDidMount() {
        this.setState({
            courseId: this.props.match.params.courseId,
            moduleId: this.props.match.params.moduleId,
            lessonId: this.props.match.params.lessonId
        }, () => this.findAllTopicsForLesson());

    }
    componentWillReceiveProps(newProps) {
        this.setState({
            courseId: newProps.match.params.courseId,
            moduleId: newProps.match.params.moduleId,
            lessonId: newProps.match.params.lessonId
        }, () => this.findAllTopicsForLesson());
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.topics !== nextState.topics
            || this.props !== nextProps) return true;
        else return false;
    }
    render() {
        return (
            <div>
                <div>
                    {this.renderTopics()}
                </div>
                {/* <div>
                        <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId"
                            component={TopicEditor} />
                    </div> */}
            </div>
        )
    }
}