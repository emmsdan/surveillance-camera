import { useState } from 'react';

const useModal = (show = false) => {
  const [useModal, setIsShowing] = useState({
    isShowing: show,
    isFullscreen: false,
    isMinimized: false
  });
  const hide = () => {
    setIsShowing({ ...useModal, isShowing: !useModal.isShowing });
  };
  const fullscreen = () => {
    setIsShowing({ ...useModal, isFullscreen: !useModal.isFullscreen });
  };
  const minimize = () => {
    setIsShowing({ ...useModal, isMinimized: !useModal.isMinimized });
  };
  return { ...useModal, hide, fullscreen, minimize };
};

export default useModal;
