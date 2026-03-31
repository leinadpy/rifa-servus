import { ORGANIZATION_NAME } from '../constants'

const DRAW_DATE = 'DOM 04 DE MAYO'

const ORDINALS = ['1er', '2do', '3er', '4to', '5to', '6to', '7mo', '8vo', '9no', '10mo']

export default function Footer({ prizes }) {
  return (
    <footer className="mx-4 my-6">
      <div className="bg-white/90 rounded-2xl shadow-sm border border-indigo-200/50 px-5 py-5 mb-4">
        <p className="text-xs text-indigo-400 uppercase tracking-wide mb-3 text-center font-semibold">
          Premios
        </p>

        {prizes.length === 0 ? (
          <div className="space-y-2">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-4 bg-indigo-100 rounded animate-pulse" />
            ))}
          </div>
        ) : (
          <ul className="space-y-2">
            {prizes.map((prize, i) => (
              <li key={prize.numero} className="flex text-sm gap-2">
                <span className="text-indigo-900 font-bold whitespace-nowrap">{ORDINALS[i] ?? `${i + 1}°`} Premio</span>
                <span className="text-indigo-800 font-medium">
                  {prize.descripcion}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="bg-indigo-950 rounded-2xl px-5 py-4 text-center shadow-lg">
        <p className="text-amber-400 font-black text-lg tracking-wide">
          FECHA DEL SORTEO: <span className="text-white">{DRAW_DATE}</span>
        </p>
      </div>

      <p className="text-center text-xs text-indigo-300 mt-4">
        {ORGANIZATION_NAME} © 2026
      </p>
    </footer>
  )
}
