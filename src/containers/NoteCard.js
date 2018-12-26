import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => (
  <div className="col-md-4">
    <Link className="card-container" to={"/" + props.note.path}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title" dangerouslySetInnerHTML={{ __html: props.note.name + (props.note.folder > 0 ? " <div class='size-indicator text-muted'>" + props.note.folder + "</div>" : "") }} />
        </div>
      </div>
    </Link>
  </div>
)
