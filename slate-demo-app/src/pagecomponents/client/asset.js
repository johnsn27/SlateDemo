import React, { useState } from 'react';
import SlateEditor from '../editor/slate-editor'
import Sidebar from './sidebar/sidebar'
import SentimentAnalysis from '../sentiment-analysis/sentiment-analysis'
import Btn from '@bbc/igm-btn'
import GELIcon from '@bbc/igm-gel-icon';
import './asset.scss';

const keyboardSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" >
    <path xmlns="http://www.w3.org/2000/svg" d="M0 6.5v19h32v-19zm18 3h3v3h-3zm0 5h3v3h-3zm-5-5h3v3h-3zm0 5h3v3h-3zm-5-5h3v3H8zm0 5h3v3H8zm-2 8H3v-3h3zm0-5H3v-3h3zm0-5H3v-3h3zm17 10H8v-3h15zm6 0h-4v-5h-2v-3h6zm0-10h-6v-3h6z" />
  </svg>
);

const Asset = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true); //change this back to false

  return (
    <div className="editor-container">
      <SlateEditor />
        {!isSidebarVisible &&
                <Btn className="sidebar__open-btn" onClick={() => setIsSidebarVisible(true)} aria-label="Open shortcuts sidebar">
                  <GELIcon customSvg={keyboardSvg} />
                </Btn>
              }
        {isSidebarVisible &&
          <Sidebar toggle={setIsSidebarVisible}>
            <SentimentAnalysis />
          </Sidebar>
        }
    </div>
  )
}

export default Asset;
