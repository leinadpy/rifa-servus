import { useState, useEffect, useMemo } from 'react'
import Header from './components/Header'
import Info from './components/Info'
import NumberGrid from './components/NumberGrid'
import VendorFilter from './components/VendorFilter'
import Footer from './components/Footer'
import './index.css'

const SHEET_ID = import.meta.env.VITE_SHEET_ID || 'YOUR_GOOGLE_SHEET_ID'
const BASE_URL = `https://opensheet.elk.sh/${SHEET_ID}`
const POLL_INTERVAL = 10_000

function parseNumbers(data) {
  return data.map((row) => ({
    numero: String(row.numero),
    vendido: String(row.vendido).toUpperCase() === 'TRUE',
    vendedores: row.vendedores ? String(row.vendedores).trim() : '',
  }))
}

function parsePrizes(data) {
  return data.map((row) => ({
    numero: String(row.numero),
    descripcion: row['Descripción'] || row.Descripcion || '',
    palabraClave: row['Palabra clave'] || row['Palabra Clave'] || '',
    imagen: row['Imagen'] || row.imagen || '',
  }))
}

export default function App() {
  const [numbers, setNumbers] = useState([])
  const [prizes, setPrizes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeVendor, setActiveVendor] = useState('Todos')

  async function fetchNumbers() {
    try {
      setLoading(true)
      const res = await fetch(`${BASE_URL}/Rifa`)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      setNumbers(parseNumbers(data))
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  async function fetchPrizes() {
    try {
      const res = await fetch(`${BASE_URL}/Premios`)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      setPrizes(parsePrizes(data))
    } catch {
      // prizes failing silently — non-critical
    }
  }

  useEffect(() => {
    fetchPrizes()
    fetchNumbers()
    const interval = setInterval(fetchNumbers, POLL_INTERVAL)
    return () => clearInterval(interval)
  }, [])

  const vendors = useMemo(() => {
    const names = new Set()
    numbers.forEach((n) => {
      if (n.vendedores) names.add(n.vendedores)
    })
    return ['Todos', ...Array.from(names)]
  }, [numbers])

  const filteredNumbers = useMemo(() => {
    if (activeVendor === 'Todos') return numbers
    return numbers.filter((n) => n.vendedores === activeVendor)
  }, [numbers, activeVendor])

  const soldCount = filteredNumbers.filter((n) => n.vendido).length

  return (
    <div className="max-w-2xl mx-auto pb-8 min-h-screen">
      <Header prizes={prizes} />
      <Info total={filteredNumbers.length} sold={soldCount} />
      <VendorFilter vendors={vendors} active={activeVendor} onChange={setActiveVendor} />
      <NumberGrid numbers={filteredNumbers} loading={loading} error={error} />
      <Footer prizes={prizes} />
    </div>
  )
}
