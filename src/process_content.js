const jdown = require('jdown');

// https://gist.github.com/SonyaMoisset/aa79f51d78b39639430661c03d9b1058#file-title-case-a-sentence-for-loop-wc-js
function toTitleCase(str) {
  var result = str.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
}

export async function getContent() {
  const notes = await jdown('content');
  let newNotes = []
  Object.keys(notes).map(function (key, index) {
    let attributes = notes[key]
    let path = key.split("/")
    let name = path.pop()
    let parent = path.join("/")
    let parentName = path.pop()
    key = key.split("/")
    if (parentName == name) {
      parent = path.join("/")
      key.pop()
    }
    key = key.join("/")
    name = toTitleCase(name);
    newNotes.push({
      path: key, name, parent, ...attributes
    })
  });
  return newNotes
}

export function getRoutes(notes) {
  return notes.map(note => {
    return {
      path: `${note.path}`,
      component: 'src/containers/Note',
      getData: () => ({
        note, children_notes: getChildren(notes, note.path)
      }),
    }
  })
}

export function getChildren(notes, parent) {
  return notes.filter(note => note.parent == parent)
}

