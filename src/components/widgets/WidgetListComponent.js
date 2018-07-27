import React from 'react';
import Switch from 'react-toggle-switch';

import { HEADING_WIDGET, PARAGRAPH_WIDGET, LIST_WIDGET, LINK_WIDGET, IMAGE_WIDGET } from '../../constants/WidgetConstants';
import HeadingWidget from './HeadingWidget';
import ParagraphWidget from './ParagraphWidget';
import ListWidget from './ListWidget';
import LinkWidget from './LinkWidget';
import ImageWidget from './ImageWidget';

// Props: widgets, preview, deletedWidgets, togglePreview, updateWidget, deleteWidget, saveWidgets

class WidgetList extends React.Component {
    constructor(props) {
        super(props);
        this.widgetType = [];
        let url = window.location.href;
        let tId = url.slice(url.search('topic') + 6);
        this.props.loadAllWidgetsForTopic(tId);
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="ml-auto mr-3">
                        <button type="button" 
                            onClick={() => this.props.saveWidgets(this.props.widgets)}
                            className="btn btn-sm btn-success m-1">
                            Save
                        </button>
                        <label htmlFor="switch">Preview</label>
                        <Switch onClick={() => this.props.togglePreview(this.props.preview)}
                            on={this.props.preview}
                            className="">
                        </Switch>
                    </div>
                </div>
                <ul className="list-group">
                    {this.props.widgets.map((widget, index) => (
                        <li key={index} className="list-group-item">
                            {!this.props.preview &&
                                <div className="float-right">
                                    <button className="btn btn-sm btn-warning mr-1">
                                        <i className="fas fa-arrow-up"></i>
                                    </button>
                                    <button className="btn btn-sm btn-warning mr-1">
                                        <i className="fas fa-arrow-down"></i>
                                    </button>
                                    <select onChange={() => {
                                        widget.type = this.widgetType[widget.id].value;
                                        this.props.updateWidget(widget)
                                    }}
                                        ref={node => this.widgetType[widget.id] = node}
                                        defaultValue={widget.type}
                                        id="widgetType">
                                        <option value={HEADING_WIDGET}>Heading</option>
                                        <option value={PARAGRAPH_WIDGET}>Paragraph</option>
                                        <option value={LIST_WIDGET}>List</option>
                                        <option value={LINK_WIDGET}>Link</option>
                                        <option value={IMAGE_WIDGET}>Image</option>
                                    </select>
                                    <button className="btn btn-sm btn-danger ml-1"
                                        onClick={() => this.props.deleteWidget(widget.id)}>
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            }
                            <div>
                                {widget.type === HEADING_WIDGET && <HeadingWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview} />}
                                {widget.type === PARAGRAPH_WIDGET && <ParagraphWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview} />}
                                {widget.type === LIST_WIDGET && <ListWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview} />}
                                {widget.type === LINK_WIDGET && <LinkWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview} />}
                                {widget.type === IMAGE_WIDGET && <ImageWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview} />}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default WidgetList