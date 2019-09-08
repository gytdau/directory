import React from "react"
import { Link } from "react-router-dom"

let image = note => {
  if (note.gradient) {
    return {
      background: `${note.gradient}`,
    }
  }
  if (note.background) {
    return {
      background: `url(/${note.path}${note.background})`,
    }
  }
  return {}
}
export default props =>
  props.note.published != false ? (
    <Link to={`/${props.note.path}`}>
      <div className={"card series-" + props.series} style={image(props.note)}>
        <div className="card-body">
          <h5
            dangerouslySetInnerHTML={{
              __html: props.note.name,
            }}
          />
        </div>
      </div>
    </Link>
  ) : null
