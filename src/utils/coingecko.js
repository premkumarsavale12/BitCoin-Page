export async function fetchCoins() {
  const url = 'https://api.coingecko.com/api/v3/simple/price' +
              '?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd&include_24hr_change=true'
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error('Network response was not ok')
  }
  return res.json()
}
