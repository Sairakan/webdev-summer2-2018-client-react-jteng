import React from 'react'

const ImageWidget = ({ widget, updateWidget, preview }) => {
    let src;
    let widgetName;
    if (!widget.hasOwnProperty('src')) {
        widget.src = 'http://picsum.photos/300'
        updateWidget(widget)
    }
    return (
        <div>
            {!preview &&
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
            <img src={widget.src} alt="the URL" />
        </div>
    )
}

export default ImageWidget