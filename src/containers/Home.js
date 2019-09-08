import React from "react"
import { withRouteData } from "react-static"
import NoteCards from "./NoteCards"
import NoteCard from "./NoteCard"
import { Link } from "react-router-dom"

export default withRouteData(({ children_notes }) => {
  return (
    <div>
      <div className="container container-padded">
        {children_notes.map(note => (
          <div>
            <h1 className="card-list-title">
              {note.name}{" "}
              <div>
                <Link to={note.path} className="btn btn-light float-right">
                  OPEN
                </Link>
              </div>
            </h1>
            <div className={"card-list"}>
              {note.children.slice(0, 4).map(child => (
                <NoteCard note={child} series={note.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
})
