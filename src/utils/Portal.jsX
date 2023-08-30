/* eslint linebreak-style: ["error", "windows"] */
import { createPortal } from 'react-dom';

const Portal = ({ children }) => {
  const mount = document.getElementById('modalRoot');
  // const el = document.createElement('div');

  return createPortal(children, mount);
};

export default Portal;
