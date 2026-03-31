export default function VendorFilter({ vendors, active, onChange }) {
  if (vendors.length <= 1) return null

  return (
    <div className="mx-4 mt-3">
      <select
        value={active}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white/90 border border-indigo-200/50 rounded-xl px-4 py-2.5 text-sm text-indigo-800 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
      >
        {vendors.map((vendor) => (
          <option key={vendor} value={vendor}>
            {vendor}
          </option>
        ))}
      </select>
    </div>
  )
}
