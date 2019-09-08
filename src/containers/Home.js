import React from "react"
import { withRouteData } from "react-static"
import NoteCards from "./NoteCards"
import NoteCard from "./NoteCard"

export default withRouteData(({ children_notes }) => {
  return (
    <div>
      <div className="container container-padded">
        {children_notes.map(note => (
          <div>
            <h1>{note.name + " Series"}</h1>
            <div className={"card-list"}>
              {note.children.map(child => (
                <NoteCard note={child} series={note.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
})
