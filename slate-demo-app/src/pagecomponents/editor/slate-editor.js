import React, { useEffect, useMemo, useState } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import './scss/slate-editor.scss'

const SlateEditor = () => {
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
    <div className="editor">
      <div className="headline">
        <Slate
          editor={editor}
          value={value1}
          onChange={newValue => setValue1(newValue)}
        >
          <Editable />
        </Slate>
      </div>
      <div className="text">
        <Slate
          editor={editor}
          value={value1}
          onChange={newValue => setValue1(newValue)}
        >
          <Editable />
        </Slate>
      </div>
    </div>
  )
}

export default SlateEditor;
