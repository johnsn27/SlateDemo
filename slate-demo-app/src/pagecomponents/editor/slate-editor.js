import React, { useMemo, useState } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import './scss/slate-editor.scss'

const SlateEditor = () => {
  const editor = useMemo(() => withReact(createEditor()), [])
  const editor2 = useMemo(() => withReact(createEditor()), [])
  // Add the initial value when setting up our state.
  const [value1, setValue1] = useState([
    {
      type: 'headline',
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
      <div className="paragraph">
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
          editor={editor2}
          value={value2}
          onChange={newValue => setValue2(newValue)}
        >
          <Editable />
        </Slate>
      </div>
    </div>
  )
}

export default SlateEditor;
