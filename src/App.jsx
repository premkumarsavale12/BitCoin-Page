import React from 'react'
import Header from './components/Header.jsx'
import CoinList from './components/CoinList.jsx'
import BitcoinChart from './components/BitcoinChart.jsx'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <section className="panel">
          <h2 className="panel-title">Top Coins</h2>
          <CoinList />
        </section>
        <section className="panel">
          <h2 className="panel-title">Bitcoin Price (Sample)</h2>
          <BitcoinChart />
        </section>
      </main>
      <footer className="footer">
        <span>Built for the Frontend Developer – Crypto Dashboard</span>
      </footer>
    </div>
  )
}
