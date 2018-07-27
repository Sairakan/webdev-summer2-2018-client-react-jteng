import React from 'react'

const ParagraphWidget = ({ widget, updateWidget }) => {
    let text;
    return (
        <div>
            <h3>Paragraph Widget</h3>
            <label htmlFor="text">Paragraph Text</label>
            <input onChange={() => {
                widget.text = text.value;
                updateWidget(widget)
            }}
                ref={node => text = node}
                className="form-control" id="text"
                defaultValue={widget.text}
                placeholder="Paragraph Text" />
            <h4>Preview</h4>
            <p>{widget.text}</p>
        </div>
    )
}

export default ParagraphWidget