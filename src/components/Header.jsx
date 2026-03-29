import { ORGANIZATION_NAME } from '../constants'

const COLORS = ['1a1a2e', '16213e', '0f3460', '1b4332', '2d3a4a']

export default function Header({ prizes }) {
  return (
    <header className="bg-teal-400 text-white text-center py-6 px-4 rounded-b-3xl shadow-lg">
      <h1 className="text-2xl font-bold tracking-tight mb-1">
        {ORGANIZATION_NAME}
      </h1>
      <p className="text-teal-900 font-medium text-sm mb-5">Rifa online</p>

      <div className="flex justify-center gap-3 flex-wrap">
        {prizes.length > 0
          ? prizes.map((prize, i) => (
              <div
                key={prize.numero}
                className="w-24 h-24 rounded-xl border-2 border-white shadow-md flex flex-col items-center justify-center gap-1 text-white"
                style={{ backgroundColor: `#${COLORS[i % COLORS.length]}` }}
              >
                <span className="text-2xl font-black">{prize.numero}°</span>
                <span className="text-xs font-semibold text-center px-1 leading-tight">
                  {prize.palabraClave}
                </span>
              </div>
            ))
          : [1, 2, 3].map((n) => (
              <div
                key={n}
                className="w-24 h-24 rounded-xl border-2 border-white shadow-md bg-teal-600 animate-pulse"
              />
            ))}
      </div>
    </header>
  )
}
