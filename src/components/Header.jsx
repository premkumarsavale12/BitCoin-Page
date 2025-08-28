import React from 'react'

export default function Header() {
  const today = new Date().toLocaleDateString(undefined, {
    weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'
  })

  return (
    <header className="header">
      <div className="container header-inner">
        <h1 className="brand">Crypto Dashboard</h1>
        <div className="date">{today}</div>
      </div>
    </header>
  )
}
