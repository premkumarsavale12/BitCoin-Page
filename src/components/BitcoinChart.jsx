import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'


const data = [
  { name: 'Mon', price: 60000 },
  { name: 'Tue', price: 60500 },
  { name: 'Wed', price: 59850 },
  { name: 'Thu', price: 61200 },
  { name: 'Fri', price: 62000 },
  { name: 'Sat', price: 61500 },
  { name: 'Sun', price: 62350 },
]

export default function BitcoinChart() {
  return (
    <div className="chart-wrap">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 10, right: 16, bottom: 0, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={['dataMin - 500', 'dataMax + 500']} />
          <Tooltip />
          <Line type="monotone" dataKey="price" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
