export default function VendorFilter({ vendors, active, onChange }) {
  if (vendors.length <= 1) return null

  return (
    <div className="mx-4 mt-3">
      <select
        value={active}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
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
