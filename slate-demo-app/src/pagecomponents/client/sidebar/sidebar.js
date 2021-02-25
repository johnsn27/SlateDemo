import React from 'react';
import PropTypes from 'prop-types';
import Btn from '@bbc/igm-btn';
import GELIcon from '@bbc/igm-gel-icon';
import './scss/sidebar.scss';

const noIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 13 13"
    focusable="false"
  >
    <path d="M8.63,6.5,13,10.87,10.87,13,6.5,8.63,2.13,13,0,10.87,4.37,6.5,0,2.13,2.14,0,6.5,4.37,10.87,0,13,2.13Z" />
  </svg>
)

function Sidebar(props) {
  const { editorFocused, children, toggle } = props;

  return (
    <div className="sidebar">
      {editorFocused && (
        <div className="sidebar__context-bar" />
      )}
      <Btn onClick={() => toggle(false)} className="sidebar__close" aria-label="Close shortcuts sidebar">
        <GELIcon customSvg={noIcon} className="sidebar__close-icon"/>
      </Btn>
      <div className="sidebar__content">{children}</div>
    </div>
  );
}

Sidebar.propTypes = {
  editorFocused: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Sidebar