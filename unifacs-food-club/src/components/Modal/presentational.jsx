// dependencies
import React from 'react';

// css
import './styles.css'

function ModalPresentational({ isVisible, children }) {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="modal-container">
      <div className="modal-content">
        {children}
      </div>
    </div>
  )
}

export default ModalPresentational;