import React from 'react'

const ParagraphWidget = ({ widget, updateWidget, preview }) => {
    let text;
    let widgetName;
    return (
        <div>
            {!preview &&
                <div key={widget.id}>
                    <h3>Paragraph Widget</h3>
                    <label htmlFor="text">Paragraph Text</label>
                    <input onChange={() => {
                        widget.text = text.value;
                        updateWidget(widget)
                    }}
                        ref={node => text = node}
                        className="form-control" id="text"
                        defaultValue={widget.text}
                        placeholder="Lorem ipsum" />
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
            <p>{widget.text}</p>
        </div>
    )
}

export default ParagraphWidget