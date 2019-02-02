import React from 'react'
import { withRouteData, Link } from 'react-static'
import convert from 'htmr'
import NoteCards from './NoteCards'

export default withRouteData(({ children_notes, note }) => {
  console.log(children_notes)
  if (note.type == "essay") {
    return (<div>
      <div className="header--secondary header--secondary--essay">
        <div className="container">
          <h1>{note.name}</h1>
          <h2>{note.subtitle}</h2>
        </div>
      </div>
      <div className="text">
        <div className="container">
          <div class="row">
            <div class="col-md-8 offset-md-2 essay-titlecap" dangerouslySetInnerHTML={{ __html: note.contents }} />
          </div>
        </div>
      </div>
    </div>)
  }
  return (
    <div>
      <div className="header--secondary">
        <div className="container">
          <h1>{note.name}</h1>
        </div>
      </div>
      <div className="container">
        <NoteCards notes={children_notes} />
      </div>
      <div className="text">
        <div className="container">
          <div class="row">
            <div class="col-md-8 offset-md-2" dangerouslySetInnerHTML={{ __html: note.contents }} />
          </div>
        </div>
      </div>
    </div>
  )
})