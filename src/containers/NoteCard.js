import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => (
  <div className="col-md-4">
    <Link className="card-container" to={"/" + props.note.path}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.note.name}</h5>
        </div>
      </div>
    </Link>
  </div>
)
