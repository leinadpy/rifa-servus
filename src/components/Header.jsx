import { ORGANIZATION_NAME } from '../constants'
import matherImg from '../assets/Mather.png'
import servusImg from '../assets/Servus.png'

export default function Header({ prizes }) {
  return (
    <header className="text-center py-6 px-4" style={{ background: 'linear-gradient(180deg, #c0c0db 0%, #b8b8d4 100%)' }}>
      <div className="flex items-center justify-center gap-4 mb-2">
        <img src={matherImg} alt="Virgen María" className="w-20 h-auto object-contain" />
        <div>
          <h1 className="text-3xl font-black tracking-tight mb-0 text-indigo-950" style={{ fontFamily: 'Georgia, serif', textShadow: '1px 1px 2px rgba(255,255,255,0.3)' }}>
            RIFA ONLINE
          </h1>
          <h2 className="text-2xl font-black text-indigo-950 mb-0" style={{ fontFamily: 'Georgia, serif' }}>
            SERVUS
          </h2>
          <p className="text-indigo-900 font-semibold text-base mb-0">Retiro 2026</p>
        </div>
        <img src={servusImg} alt="Servus" className="w-20 h-auto object-contain" />
      </div>

      <div className="bg-indigo-950/80 rounded-xl px-4 py-3 mb-4 inline-block">
        <p className="text-amber-400 font-black text-2xl mb-0">COSTO: 10.000gs</p>
        <p className="text-white text-sm font-medium">
          <span className="font-bold">Método de Pago:</span> Efectivo/transferencia
        </p>
      </div>

      <div className="flex justify-center gap-3 flex-wrap">
        {prizes.length > 0
          ? prizes.map((prize) => (
              <div
                key={prize.numero}
                className="w-20 rounded-xl border-2 border-white/50 shadow-md flex flex-col items-center overflow-hidden bg-white/90"
              >
                {prize.imagen ? (
                  <img
                    src={prize.imagen}
                    alt={prize.palabraClave}
                    className="w-full h-16 object-cover"
                  />
                ) : (
                  <div className="w-full h-16 bg-indigo-200 flex items-center justify-center">
                    <span className="text-xl font-black text-indigo-900">{prize.numero}°</span>
                  </div>
                )}
                <span className="text-[9px] text-indigo-400 font-medium mt-0.5">Foto referencia</span>
                <span className="text-[10px] font-semibold text-indigo-900 text-center px-1 leading-tight pb-1">
                  {prize.palabraClave}
                </span>
              </div>
            ))
          : [1, 2, 3].map((n) => (
              <div
                key={n}
                className="w-20 h-24 rounded-xl border-2 border-white/50 shadow-md bg-indigo-800 animate-pulse"
              />
            ))}
      </div>
    </header>
  )
}
