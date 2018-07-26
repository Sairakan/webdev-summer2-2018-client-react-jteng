import React from 'react';

import { HEADING_WIDGET, PARAGRAPH_WIDGET, LIST_WIDGET, LINK_WIDGET, IMAGE_WIDGET } from '../../constants/WidgetConstants';

const WidgetList = ({ widgets, deleteWidget, updateWidget }) => (
    <div className="container">
        <h1>Widgets</h1>
        <ul className="list-group">
            {widgets.map((widget, index) => (
                <li key={index} className="list-group-item">
                    <div>
                        <h3>
                            {widget.type === HEADING_WIDGET && 'Heading '}
                            {widget.type === PARAGRAPH_WIDGET && 'Paragraph '}
                            {widget.type === LIST_WIDGET && 'List '}
                            {widget.type === LINK_WIDGET && 'Link '}
                            {widget.type === IMAGE_WIDGET && 'Image '}
                            Widget
                        </h3>
                        <div className="float-right">
                            <button className="btn btn-sm btn-warning mr-1">
                                <i className="fas fa-arrow-up"></i>
                            </button>
                            <button className="btn btn-sm btn-warning mr-1">
                                <i className="fas fa-arrow-down"></i>
                            </button>
                            <select>
                                <option value="HEADING">Heading</option>
                                <option value="PARAGRAPH">Paragraph</option>
                                <option value="LIST">List</option>
                                <option value="LINK">Link</option>
                                <option value="IMAGE">Image</option>
                            </select>
                            <button className="btn btn-sm btn-danger ml-1"
                                onClick={() => deleteWidget(widget.id)}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                    <div>
                        {widget.widgetType === 'HEADING' && <HeadingWidget widget={widget} updateWidget={updateWidget} />}
                        {widget.widgetType === 'PARAGRAPH' && <ParagraphWidget widget={widget} updateWidget={updateWidget} />}
                        {widget.widgetType === 'LIST' && <ListWidget widget={widget} updateWidget={updateWidget} />}
                        {widget.widgetType === 'LINK' && <LinkWidget widget={widget} updateWidget={updateWidget} />}
                        {widget.widgetType === 'IMAGE' && <ImageWidget widget={widget} updateWidget={updateWidget} />}
                    </div>
                </li>
            ))}
        </ul>
    </div>
)

export default WidgetList