export default function NumberItem({ numero, vendido }) {
  return (
    <div
      className={`
        relative flex items-center justify-center
        rounded-lg font-bold text-sm text-white
        w-full aspect-square select-none
        transition-all duration-300 ease-in-out
        ${vendido
          ? 'bg-slate-500/60 opacity-60'
          : 'shadow-sm hover:scale-105 cursor-pointer hover:brightness-110'
        }
      `}
      style={!vendido ? {
        background: 'linear-gradient(180deg, #6b7ec2 0%, #4a5a9e 100%)',
        boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.2), 0 2px 4px rgba(0,0,0,0.15)',
      } : undefined}
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
