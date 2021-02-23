import './App.css';
// Import React dependencies.
import React, { useEffect, useMemo, useState } from 'react'
// Import the Slate editor factory.
import { createEditor } from 'slate'

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'

const App = () => {
  const editor = useMemo(() => withReact(createEditor()), [])
  // Add the initial value when setting up our state.
  const [value1, setValue1] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'Paragraph 1' }],
    },
  ])
  const [value2, setValue2] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'Paragraph 2' }],
    },
  ])

  return (
    <React.Fragment>
      <Slate
        editor={editor}
        value={value1}
        onChange={newValue => setValue1(newValue)}
      >
        <Editable />
      </Slate>
      <Slate
      editor={editor}
      value={value2}
      onChange={newValue => setValue2(newValue)}
    >
      <Editable />
    </Slate>
  </React.Fragment>
  )
}

export default App;
