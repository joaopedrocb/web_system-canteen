// dependencies
import React from 'react';

export function ModalPresentational({ isVisible, children }) {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="modal-container">{children}</div>
  )
}