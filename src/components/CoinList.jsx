import React, { useEffect, useState } from 'react'
import CoinCard from './CoinCard.jsx'
import { fetchCoins } from '../utils/coingecko.js'

const DEFAULTS = {
  bitcoin: { name: 'Bitcoin', symbol: 'BTC', price: 60234.12, change24h: 1.23 },
  ethereum: { name: 'Ethereum', symbol: 'ETH', price: 2345.67, change24h: -0.87 },
  dogecoin: { name: 'Dogecoin', symbol: 'DOGE', price: 0.125, change24h: 3.45 },
}

export default function CoinList() {
  const [coins, setCoins] = useState(DEFAULTS)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        const data = await fetchCoins()
        if (!mounted || !data) return

        const mapped = {
          bitcoin: {
            name: 'Bitcoin',
            symbol: 'BTC',
            price: data.bitcoin?.usd ?? DEFAULTS.bitcoin.price,
            change24h: data.bitcoin?.usd_24h_change ?? DEFAULTS.bitcoin.change24h,
          },
          ethereum: {
            name: 'Ethereum',
            symbol: 'ETH',
            price: data.ethereum?.usd ?? DEFAULTS.ethereum.price,
            change24h: data.ethereum?.usd_24h_change ?? DEFAULTS.ethereum.change24h,
          },
          dogecoin: {
            name: 'Dogecoin',
            symbol: 'DOGE',
            price: data.dogecoin?.usd ?? DEFAULTS.dogecoin.price,
            change24h: data.dogecoin?.usd_24h_change ?? DEFAULTS.dogecoin.change24h,
          },
        }
        setCoins(mapped)
        setError(null)
      } catch (e) {
        setError('Could not fetch live prices. Showing sample data.')
      } finally {
        setLoading(false)
      }
    })()
    return () => { mounted = false }
  }, [])

  return (
    <div>
      {loading && <div className="status">Loading latest prices…</div>}
      {error && <div className="status error">{error}</div>}
      <div className="grid">
        <CoinCard {...coins.bitcoin} />
        <CoinCard {...coins.ethereum} />
        <CoinCard {...coins.dogecoin} />
      </div>
    </div>
  )
}
