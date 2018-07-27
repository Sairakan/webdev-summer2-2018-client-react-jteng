import React from 'react';

import { HEADING_WIDGET, PARAGRAPH_WIDGET, LIST_WIDGET, LINK_WIDGET, IMAGE_WIDGET } from '../../constants/WidgetConstants';
import HeadingWidget from './HeadingWidget';
import ParagraphWidget from './ParagraphWidget';

const WidgetList = ({ widgets, deleteWidget, updateWidget }) => {
    let widgetType = [];
    return (
        <div className="container">
            <h1>Widgets</h1>
            <ul className="list-group">
                {widgets.map((widget, index) => (
                    <li key={index} className="list-group-item">
                        <div className="float-right">
                            <button className="btn btn-sm btn-warning mr-1">
                                <i className="fas fa-arrow-up"></i>
                            </button>
                            <button className="btn btn-sm btn-warning mr-1">
                                <i className="fas fa-arrow-down"></i>
                            </button>
                            <select onChange={() => {
                                widget.type = widgetType[widget.id].value;
                                updateWidget(widget)
                            }}
                                ref={node => widgetType[widget.id] = node}
                                defaultValue={widget.type}
                                id="widgetType">
                                <option value={HEADING_WIDGET}>Heading</option>
                                <option value={PARAGRAPH_WIDGET}>Paragraph</option>
                                <option value={LIST_WIDGET}>List</option>
                                <option value={LINK_WIDGET}>Link</option>
                                <option value={IMAGE_WIDGET}>Image</option>
                            </select>
                            <button className="btn btn-sm btn-danger ml-1"
                                onClick={() => deleteWidget(widget.id)}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                        <div>
                            {widget.type === HEADING_WIDGET && <HeadingWidget widget={widget} updateWidget={updateWidget} />}
                            {widget.type === PARAGRAPH_WIDGET && <ParagraphWidget widget={widget} updateWidget={updateWidget} />}
                            {/* {widget.widgetType === 'LIST' && <ListWidget widget={widget} updateWidget={updateWidget} />}
                        {widget.widgetType === 'LINK' && <LinkWidget widget={widget} updateWidget={updateWidget} />}
                        {widget.widgetType === 'IMAGE' && <ImageWidget widget={widget} updateWidget={updateWidget} />} */}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WidgetList