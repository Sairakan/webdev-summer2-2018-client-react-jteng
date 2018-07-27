import React from 'react'

const LinkWidget = ({ widget, updateWidget }) => {
    let text;
    let href;
    if (!widget.hasOwnProperty('href')) {
        widget.href = ''
        updateWidget(widget)
    }
    return (
        <div>
            <h3>Link Widget</h3>
            <label htmlFor="text">Link Text</label>
            <input onChange={() => {
                widget.text = text.value;
                updateWidget(widget)
            }}
                ref={node => text = node}
                className="form-control" id="text"
                defaultValue={widget.text}
                placeholder="Link text" />
            <label htmlFor="href">Link URL</label>
            <input onChange={() => {
                widget.href = href.value;
                updateWidget(widget)
            }}
                ref={node => href = node}
                className="form-control" id="href"
                defaultValue={widget.href} 
                placeholder="Link URL" />
            <h4>Preview</h4>
            <a href={widget.href}>{widget.text}</a>
        </div>
    )
}

export default LinkWidget