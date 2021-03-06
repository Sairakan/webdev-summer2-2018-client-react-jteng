import React from 'react'

const HeadingWidget = ({ widget, updateWidget, preview }) => {
    let text;
    let size;
    let widgetName;
    if (!widget.size) {
        widget.size = 1
        updateWidget(widget)
    }
    return (
        <div>
            {!preview &&
                <div>
                    <h3>Heading Widget</h3>
                    <label htmlFor="text">Heading Text</label>
                    <input onChange={() => {
                        widget.text = text.value;
                        updateWidget(widget)
                    }}
                        ref={node => text = node}
                        className="form-control" id="text"
                        defaultValue={widget.text}
                        placeholder="Heading Text" />
                    <label htmlFor="size">Heading Size</label>
                    <select onChange={() => {
                        widget.size = parseInt(size.value, 10);
                        updateWidget(widget)
                    }}
                        ref={node => size = node}
                        className="form-control" id="size"
                        defaultValue={widget.size}>
                        <option value="1">Heading 1</option>
                        <option value="2">Heading 2</option>
                        <option value="3">Heading 3</option>
                        <option value="4">Heading 4</option>
                    </select>
                    <label htmlFor="widgetName">Widget Name</label>
                    <input onChange={() => {
                        widget.widgetName = widgetName.value;
                        updateWidget(widget)
                    }}
                        ref={node => widgetName = node}
                        className="form-control" id="widgetName"
                        defaultValue={widget.widgetName}
                        placeholder="Widget Name" />
                    <h4>Preview</h4>
                </div>
            }
            {widget.size === 1 && <h1>{widget.text}</h1>}
            {widget.size === 2 && <h2>{widget.text}</h2>}
            {widget.size === 3 && <h3>{widget.text}</h3>}
            {widget.size === 4 && <h4>{widget.text}</h4>}
        </div>
    )
}

export default HeadingWidget