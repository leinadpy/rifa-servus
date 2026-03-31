const BANK_INFO = [
  { label: 'Titular', value: 'Daniel Felipe Ojeda Miranda' },
  { label: 'CI (Alias)', value: '3512322' },
  { label: 'Entidad', value: 'Ueno Bank' },
  { label: 'N° de cuenta', value: '14419024' },
  { label: 'Moneda', value: 'Guaraníes (GS)' },
]

export default function Info({ total, sold }) {
  const available = total - sold

  return (
    <div className="bg-white/90 mx-4 mt-4 rounded-2xl shadow-sm border border-indigo-200/50 px-5 py-4">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">Método de pago</p>
          <p className="text-sm font-semibold text-gray-800">Transferencia</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">Precio</p>
          <p className="text-sm font-bold text-indigo-700">Gs. 10.000</p>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-gray-100 space-y-1.5">
        {BANK_INFO.map(({ label, value }) => (
          <div key={label} className="flex justify-between text-sm">
            <span className="text-gray-500">{label}</span>
            <span className="text-gray-800 font-medium">{value}</span>
          </div>
        ))}
      </div>

      {/* {total > 0 && (
        <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between text-xs text-gray-500">
          <span>
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1" />
            {available} disponibles
          </span>
          <span>
            <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mr-1" />
            {sold} vendidos
          </span>
        </div>
      )} */}
    </div>
  )
}
