import React from 'react'
import { withRouteData, Link } from 'react-static'
import convert from 'htmr'
import NoteCards from './NoteCards'
import tipograph from 'tipograph'
import htmlentities from 'html-entities'

export default withRouteData(({ children_notes, note }) => {
  let typeset = tipograph()
  const entities = new htmlentities.AllHtmlEntities();
  let contents = typeset(entities.decode(note.contents))
  console.log(contents)
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
            <div class="col-md-8 offset-md-2 essay-titlecap" dangerouslySetInnerHTML={{ __html: contents }} />
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
            <div class="col-md-8 offset-md-2" dangerouslySetInnerHTML={{ __html: contents }} />
          </div>
        </div>
      </div>
    </div>
  )
})