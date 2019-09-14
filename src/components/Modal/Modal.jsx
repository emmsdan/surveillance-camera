import React, { useState } from 'react';
import './Modal.css';

const Action = ({ setActions, actions }) => {
  return (
    <div className="action">
      <i
        className="fa fa-minus"
        onClick={() =>
          setActions({ ...actions, isMinimizes: !actions.isMinimizes })
        }
      ></i>
      <i
        className="fa fa-window-maximize"
        onClick={() =>
          setActions({ ...actions, isFullscreen: !actions.isFullscreen })
        }
      ></i>
      <i
        className="fa fa-times"
        onClick={() => setActions({ ...actions, isClose: !actions.isClose })}
      ></i>
    </div>
  );
};

const ModalContent = (content, actions) => {
  return !actions.isMinimizes && <div className="content">{content}</div>;
};

const ModalHeader = (title, actions, setActions) => {
  return (
    <div className="header">
      <div className="">{title}</div>
      <Action
        actions={actions}
        setActions={action => setActions({ ...action })}
      />
    </div>
  );
};

const Modal = ({ title, className, children, offset, isClose = false }) => {
  const [actions, setActions] = useState({
    isMinimizes: false,
    isFullscreen: false,
    isClose,
    ClientRect: {},
    defaultStyle: {}
  });
  const styles = { ...actions.defaultStyle, ...offset };
  if (actions.isFullscreen) {
    styles.width = '98%';
    styles.height = '100%';
    styles.top = '0';
    styles.left = '0';
    styles.right = '0';
  }
  return (
    !actions.isClose && (
      <div className={`modal ${className}`} style={styles}>
        {ModalHeader(title, actions, action => {
          setActions({ ...action });
        })}
        {ModalContent(children, actions)}
      </div>
    )
  );
};

export default Modal;
