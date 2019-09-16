import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'; // ES6

import './Modal.css';

const isFullScreen = isFullscreen => {
  if (isFullscreen) {
    return {
      width: '98%',
      height: '100%',
      top: '0px',
      left: '0px',
      right: '0'
    };
  }
};

const ModalHeader = (title, actions) => {
  const { minimize, fullscreen, hide } = actions;
  return (
    <div className="header">
      <div className="">{title}</div>
      <div className="action">
        <i className="fa fa-minus" onClick={minimize}></i>
        <i className="fa fa-window-maximize" onClick={fullscreen}></i>
        <i
          className="fa fa-times"
          data-dismiss="modal"
          aria-label="Close"
          onClick={hide}
        ></i>
      </div>
    </div>
  );
};
const Modal = props => {
  // const [button, setButton] = useState()
  const { actions, styles, title, children, offset } = props;
  const {
    isShowing = true,
    isFullscreen = false,
    isMinimized = false
  } = actions;
  const hide = isMinimized ? 'hide' : '';
  const useModelStyles = {
    ...styles,
    ...offset,
    ...isFullScreen(isFullscreen)
  };
  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal" style={useModelStyles}>
              <div className="modal-header">{ModalHeader(title, actions)}</div>
              <div className={`content ${hide}`}>{children} </div>
            </div>
          </div>
        </React.Fragment>,
        document.querySelector('#root')
      )
    : null;
};
Modal.propTypes = {
  actions: PropTypes.object
};
export default Modal;
