import React from "react"
import { Link } from "react-router-dom"

export default props =>
  props.note.published != false ? (
    <div
      className={"card series-" + props.series}
      style={{ background: props.path + ".png" }}
    >
      <div className="card-body">
        <h5
          dangerouslySetInnerHTML={{
            __html: props.note.name,
          }}
        />
      </div>
    </div>
  ) : null
