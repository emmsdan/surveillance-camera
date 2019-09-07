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
const Modal = ({ title, content }) => {
  const [actions, setActions] = useState({
    isMinimizes: false,
    isFullscreen: false,
    isClose: false
  });
  const styles = {};
  let classNAme = '';
  if (actions.isFullscreen) {
    styles.width = '98%';
    styles.height = '90vh';
  }
  return (
    !actions.isClose && (
      <div className={`modal`} style={styles}>
        <div className="header">
          <div className="">{title}</div>
          <Action
            actions={actions}
            setActions={action => setActions({ ...action })}
          />
        </div>
        {!actions.isMinimizes && <div className="content">{content}</div>}
      </div>
    )
  );
};

export default Modal;
