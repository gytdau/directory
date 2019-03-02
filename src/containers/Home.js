import React from 'react';
import { withRouteData } from 'react-static';
import NoteCards from './NoteCards';

export default withRouteData(({ children_notes}) => {
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
      <div className="text">
        <div className="container">
          <div class="row">
            <div class="col-md-8 offset-md-2">
              <p>Information wants to be free, and thoughts deserve to be open.</p>
              <p>Directory is a project to open-source my thoughts and build my life with transparency. We're not good at thinking, but consistent writing and reflection can hammer our thoughts into obeying rationality and logic. I'm updating Directory constantly, and you can read everything as I go.</p>
              <p>Comment on my thoughts by <a href="https://github.com/gytdau/directory/issues/new">creating an issue</a>. Steal whatever you like, no permission or attribution required.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})