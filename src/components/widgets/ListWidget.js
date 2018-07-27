import React from 'react'

import { LIST_WIDGET_ORDERED, LIST_WIDGET_UNORDERED } from '../../constants/WidgetConstants';

const ListWidget = ({ widget, updateWidget }) => {
    let text;
    let listType;
    if (!widget.listType) {
        widget.listType = LIST_WIDGET_ORDERED
        updateWidget(widget)
    }
    return (
        <div>
            <h3>List Widget</h3>
            <label htmlFor="text">List Text</label>
            <textarea onChange={() => {
                widget.text = text.value;
                updateWidget(widget)
            }}
                ref={node => text = node}
                className="form-control" id="text"
                defaultValue={widget.text}
                placeholder="List Text (separate items into individual rows)">
            </textarea>
            <label htmlFor="size">List Type</label>
            <select onChange={() => {
                widget.listType = listType.value;
                updateWidget(widget)
            }}
                ref={node => listType = node}
                className="form-control" id="size"
                value={widget.listType}>
                <option value={LIST_WIDGET_ORDERED}>Ordered List</option>
                <option value={LIST_WIDGET_UNORDERED}>Unordered List</option>
            </select>
            <h4>Preview</h4>
            {widget.listType === LIST_WIDGET_ORDERED &&
                <ol>
                    {widget.text.split('\n').map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ol>
            }
            {widget.listType === LIST_WIDGET_UNORDERED &&
                <ul>
                    {widget.text.split('\n').map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            }
        </div>
    )
}

export default ListWidget