import React from 'react';

export default props => <div className="col-md-4">
    <div className="card mb-4 shadow-sm">
        <div className="text-center">
            {props.embed && <div dangerouslySetInnerHTML={{__html: props.embed}}></div>}
            {!props.embed && <img src={props.img} alt={props.name} className="img-fluid"/>}
        </div>
        <div className="card-body">
            <p className="card-text">
                <strong>{props.name}</strong> {(props.description || "").slice(0, 80)}...
            </p>
            <div className="text-right">
                <button type="button" className="btn btn-default" data-toggle="modal"
                        data-target={`#modal_${props.id}`}>Read more
                </button>
            </div>
        </div>
    </div>
    <div className="modal fade" id={`modal_${props.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                        {props.name}
                    </h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="card mb-4 shadow-sm">
                        <div className="text-center">
                            {props.embed && <div dangerouslySetInnerHTML={{__html: props.embed}}></div>}
                            {!props.embed && <img src={props.img} alt={props.name} className="img-fluid"/>}
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                {props.description}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <a href={props.href} target="_blank" rel="noopener noreferrer" className="btn btn-default">View Site</a>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</div>