import NumberItem from './NumberItem'

export default function NumberGrid({ numbers, loading, error }) {
  if (error) {
    return (
      <div className="mx-4 mt-4 bg-red-50 border border-red-200 rounded-2xl p-6 text-center text-red-600 text-sm">
        Error al cargar los datos.<br />
        <span className="text-xs text-red-400">{error}</span>
      </div>
    )
  }

  if (loading && numbers.length === 0) {
    return (
      <div className="mx-4 mt-4 flex flex-col items-center justify-center py-16 gap-3">
        <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-sm text-gray-500">Cargando números...</p>
      </div>
    )
  }

  return (
    <div className="mx-4 mt-4">
      <div
        className="
          grid gap-1.5
          grid-cols-5
          sm:grid-cols-8
          md:grid-cols-10
          lg:grid-cols-10
        "
      >
        {numbers.map((item) => (
          <NumberItem key={item.numero} numero={item.numero} vendido={item.vendido} />
        ))}
      </div>

      {loading && numbers.length > 0 && (
        <p className="text-center text-xs text-gray-400 mt-3 animate-pulse">
          Actualizando...
        </p>
      )}
    </div>
  )
}
