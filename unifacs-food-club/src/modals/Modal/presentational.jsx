// dependencies
import React from 'react';

import './styles.css'

export function ModalPresentational({ isVisible, children }) {
  console.log('isVisible', isVisible);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="modal-container">
      {children}
    </div>
  )
}