import React from 'react'
import { headerContent } from '../utils/Content'

export default function Header() {
  const {
    title,
  } = headerContent

  return (
    <nav className="navbar sticky-top navbar-light bg-dark">
      <h1 className="text-center mx-auto">{title}</h1>
    </nav>
  )
}
