import { useState } from 'react'
import { toPng } from 'html-to-image'

export default function ScreenshotButton({ targetRef }) {
  const [capturing, setCapturing] = useState(false)

  async function handleClick() {
    if (!targetRef.current || capturing) return
    setCapturing(true)
    try {
      const options = {
        backgroundColor: '#b8b8d4',
        pixelRatio: 2,
        skipAutoScale: true,
      }

      // First pass warms the image cache, second pass renders correctly
      await toPng(targetRef.current, options)
      const dataUrl = await toPng(targetRef.current, options)

      const link = document.createElement('a')
      link.download = 'rifa-servus.png'
      link.href = dataUrl
      link.click()
    } catch (err) {
      console.error('Error al generar imagen:', err)
    } finally {
      setCapturing(false)
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={capturing}
      className="mx-4 mt-4 w-[calc(100%-2rem)] bg-indigo-950 text-white font-bold py-3 rounded-2xl shadow-lg active:scale-95 transition-transform disabled:opacity-50"
    >
      {capturing ? 'Generando...' : 'Descargar imagen'}
    </button>
  )
}
