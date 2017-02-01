'use strict'

import React from 'react'

const ButtonCacamba = ({ text, handleClick, statusCacamba }) => (
  <div className='btnCacambaContent'>
    <button
      className={statusCacamba}
      onClick={handleClick}>{text}</button>
  </div>
)

export default ButtonCacamba
