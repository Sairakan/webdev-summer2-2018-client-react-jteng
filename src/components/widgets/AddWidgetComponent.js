import React from 'react';



const AddWidgetComponent = ({addWidget}) => {
    return (
        <div className="container">
        <button type="submit" className="btn btn-success float-right mt-1"
            onClick={addWidget}>
            <i className="fas fa-plus"></i>
        </button>
        </div>
    )
}

export default AddWidgetComponent;