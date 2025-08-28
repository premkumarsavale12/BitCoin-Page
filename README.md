# Crypto Dashboard (React + Vite)

A small, responsive crypto dashboard that shows:
- A header with **Crypto Dashboard** and **today's date**
- A **coin list** for **Bitcoin (BTC), Ethereum (ETH), Dogecoin (DOGE)** with price + 24h change
- A **bonus** line chart for **Bitcoin** with static sample data (no live data required)

## 🧰 Tech
- React 18 + Vite
- Recharts (for the bonus chart)
- Fetch API (CoinGecko). The app gracefully falls back to sample data if the API is unavailable.

## 🚀 Quick Start

```bash
# 1) Install deps
npm install

# 2) Start dev server
npm run dev

# 3) Open the URL shown in your terminal (usually http://localhost:5173)
```

## 📁 Project Structure

```
crypto-dashboard-react/
├── index.html
├── package.json
├── vite.config.js
└── src
    ├── App.jsx
    ├── main.jsx
    ├── styles.css
    ├── components
    │   ├── BitcoinChart.jsx
    │   ├── CoinCard.jsx
    │   ├── CoinList.jsx
    │   └── Header.jsx
    └── utils
        └── coingecko.js
```

## 📝 Notes
- Prices are fetched from CoinGecko's public API. If that fails (network/CORS/rate limit), the UI shows **sample values** so you can still demo the dashboard.
- The layout is responsive and looks good on mobile and desktop.
- Styling is lightweight CSS with a dark theme.

Good luck & have fun!
