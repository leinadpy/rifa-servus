export default function NumberItem({ numero, vendido }) {
  return (
    <div
      className={`
        relative flex items-center justify-center
        rounded-xl font-bold text-sm text-white
        w-full aspect-square select-none
        transition-all duration-300 ease-in-out
        ${vendido
          ? 'bg-gray-700 opacity-70'
          : 'bg-green-500 shadow-sm hover:bg-green-400 hover:scale-105 cursor-pointer'
        }
      `}
      title={vendido ? `Número ${numero} - Vendido` : `Número ${numero} - Disponible`}
    >
      {vendido && (
        <span className="absolute inset-0 flex items-center justify-center text-white/40 text-2xl font-black pointer-events-none">
          ✕
        </span>
      )}
      <span className={vendido ? 'opacity-60 line-through decoration-white/50' : ''}>
        {numero}
      </span>
    </div>
  )
}
