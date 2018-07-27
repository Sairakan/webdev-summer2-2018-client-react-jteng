import React from 'react'

const ImageWidget = ({ widget, updateWidget }) => {
    let src;
    if (!widget.hasOwnProperty('src')) {
        widget.src = ''
        updateWidget(widget)
    }
    return (
        <div>
            <h3>Image Widget</h3>
            <label htmlFor="src">Image Source URL</label>
            <input onChange={() => {
                widget.src = src.value;
                updateWidget(widget)
            }}
                ref={node => src = node}
                className="form-control" id="src"
                defaultValue={widget.src}
                placeholder="Image Source URL" />
            <h4>Preview</h4>
            <img src={widget.src} alt="the URL" />
        </div>
    )
}

export default ImageWidget