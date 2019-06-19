import React from 'react';

export default props => {

    const fields = props.fields;
    const image = fields.featuredImage ? fields.featuredImage.fields.file.url : null;

    return <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
            <div className="text-center">
                {fields.embed && <div dangerouslySetInnerHTML={{__html: fields.embed}}></div>}
                {!fields.embed && <img src={image} alt={fields.name} className="img-fluid"/>}
            </div>
            <div className="card-body">
                <p className="card-text">
                    <strong>{fields.name}</strong> {(fields.shortDescription || "").slice(0, 80)}...
                </p>
                <div className="text-right">
                    <button type="button" className="btn btn-default" data-toggle="modal"
                            data-target={`#modal_${props.id}`}>Read more
                    </button>
                </div>
            </div>
        </div>
        <div className="modal fade" id={`modal_${props.id}`} tabIndex="-1" role="dialog"
             aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            {fields.name}
                        </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="card mb-4 shadow-sm">
                            <div className="text-center">
                                {fields.embed && <div dangerouslySetInnerHTML={{__html: fields.embed}}></div>}
                                {!fields.embed && <img src={image} alt={fields.name} className="img-fluid"/>}
                            </div>
                            <div className="card-body">
                                <p className="card-text">
                                    {fields.shortDescription}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <a href={fields.link} target="_blank" rel="noopener noreferrer" className="btn btn-default">View
                            Site</a>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}