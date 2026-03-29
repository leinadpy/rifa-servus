import { ORGANIZATION_NAME } from '../constants'

const DRAW_DATE = '04 de mayo de 2026'

const ORDINALS = ['1er', '2do', '3er', '4to', '5to', '6to', '7mo', '8vo', '9no', '10mo']

export default function Footer({ prizes }) {
  return (
    <footer className="mx-4 my-6 bg-white rounded-2xl shadow-sm border border-gray-100 px-5 py-5">
      <div className="flex justify-between items-center mb-4">
        <p className="text-xs text-gray-500 uppercase tracking-wide">Fecha del sorteo</p>
        <p className="text-sm font-semibold text-gray-800">{DRAW_DATE}</p>
      </div>

      <div className="border-t border-gray-100 pt-4">
        <p className="text-xs text-gray-500 uppercase tracking-wide mb-3 text-center font-semibold">
          Premios
        </p>

        {prizes.length === 0 ? (
          <div className="space-y-2">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-4 bg-gray-100 rounded animate-pulse" />
            ))}
          </div>
        ) : (
          <ul className="space-y-2">
            {prizes.map((prize, i) => (
              <li key={prize.numero} className="flex justify-between text-sm">
                <span className="text-gray-500">{ORDINALS[i] ?? `${i + 1}°`} lugar</span>
                <span className="text-gray-800 font-medium text-right ml-4">
                  {prize.descripcion}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <p className="text-center text-xs text-gray-400 mt-5">
        {ORGANIZATION_NAME} © 2026
      </p>
    </footer>
  )
}
