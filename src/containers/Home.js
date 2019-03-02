import React from 'react';
import { withRouteData } from 'react-static';
import NoteCards from './NoteCards';

export default withRouteData(({ children_notes }) => {
  console.log(children_notes)
  return (
    <div>
      <div className="header">
        <div className="container">
          <h1>Directory</h1>
        </div>
      </div>
      <div className="container container-padded">
        <NoteCards notes={children_notes} />
      </div>
    </div>
  )
})