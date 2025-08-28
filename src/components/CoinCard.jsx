import React from 'react'

export default function CoinCard({ name, symbol, price, change24h }) {
  const formatted = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: price >= 1 ? 2 : 6,
  }).format(price ?? 0)

  const change = typeof change24h === 'number' ? change24h : null
  const isUp = change !== null ? change >= 0 : null

  return (
    <div className="coin-card">
      <div className="coin-row">
        <div className="coin-name">
          <strong>{name}</strong> <span className="symbol">({symbol})</span>
        </div>
        <div className="coin-price">{formatted}</div>
      </div>
      <div className="coin-row">
        <div className={
          change === null ? 'coin-change neutral' :
          isUp ? 'coin-change up' : 'coin-change down'
        }>
          {change === null ? '—' : `${change.toFixed(2)}%`}
        </div>
      </div>
    </div>
  )
}
