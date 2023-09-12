import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard } from '@fortawesome/free-solid-svg-icons'

import React from 'react'

const footerStyle = {
  backgroundColor: "gray",
  textAlign: "center",
  position: "fixed",
  bottom: "0",
  width: "100%"
}


export default function Footer() {


  return (
    <div style={footerStyle}>
      <div>
        <FontAwesomeIcon icon={faIdCard} />
      </div>
    </div>
  )
}
