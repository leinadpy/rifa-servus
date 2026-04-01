import { ORGANIZATION_NAME } from '../constants'
import matherImg from '../assets/Mather.png'
import servusImg from '../assets/Servus.png'
import prize1 from '../assets/1- Sesion.jpeg'
import prize2 from '../assets/2- Termo.webp'
import prize3 from '../assets/3- Kit Cafetero.jpeg'
import prize4 from '../assets/4- Purina.jpeg'
import prize5 from '../assets/5- Sorpresa.jpg'

const PRIZE_IMAGES = [prize1, prize2, prize3, prize4, prize5]

export default function Header({ prizes }) {
  return (
    <header className="text-center py-6 px-4" style={{ background: 'linear-gradient(180deg, #c0c0db 0%, #b8b8d4 100%)' }}>
      <div className="flex items-center justify-center gap-3 mb-2">
        <img src={matherImg} alt="Virgen María" className="w-16 h-16 rounded-full object-cover shrink-0" />
        <div>
          <h1 className="text-3xl font-black tracking-tight mb-0 text-indigo-950 whitespace-nowrap" style={{ fontFamily: 'Georgia, serif', textShadow: '1px 1px 2px rgba(255,255,255,0.3)' }}>
            RIFA ONLINE
          </h1>
          <h2 className="text-2xl font-black text-indigo-950 mb-0" style={{ fontFamily: 'Georgia, serif' }}>
            SERVUS
          </h2>
          <p className="text-indigo-900 font-semibold text-base mb-0">Retiro 2026</p>
        </div>
        <img src={servusImg} alt="Servus" className="w-16 h-16 rounded-full object-cover shrink-0" />
      </div>

      <div className="bg-indigo-950/80 rounded-xl px-4 py-3 mb-4 inline-block">
        <p className="text-amber-400 font-black text-2xl mb-0">COSTO: 10.000gs</p>
        <p className="text-white text-sm font-medium">
          <span className="font-bold">Método de Pago:</span> Efectivo/transferencia
        </p>
      </div>

      <div className="flex justify-center gap-1.5">
        {prizes.length > 0
          ? prizes.map((prize, i) => (
              <div
                key={prize.numero}
                className="flex-1 min-w-0 max-w-20 rounded-lg border-2 border-white/50 shadow-md flex flex-col items-center overflow-hidden bg-white/90"
              >
                <img
                  src={PRIZE_IMAGES[i] ?? PRIZE_IMAGES[PRIZE_IMAGES.length - 1]}
                  alt={prize.palabraClave}
                  className="w-full aspect-square object-cover"
                />
                <span className="text-[7px] text-indigo-400 font-medium mt-0.5">Foto ref.</span>
                <span className="text-[8px] font-semibold text-indigo-900 text-center px-0.5 leading-tight pb-1">
                  {prize.palabraClave}
                </span>
              </div>
            ))
          : [1, 2, 3].map((n) => (
              <div
                key={n}
                className="flex-1 min-w-0 max-w-20 h-20 rounded-lg border-2 border-white/50 shadow-md bg-indigo-800 animate-pulse"
              />
            ))}
      </div>
    </header>
  )
}
