export default function FilterBar({
  search,
  setSearch,
  category,
  setCategory,
  inStock,
  setInStock,
  categories,
}) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 bg-white shadow rounded-md">

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
        className="w-full md:w-1/3 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />


      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full md:w-1/4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="">All Categories</option>
        {categories.map((c) => (
          <option key={c._id} value={c._id}>
            {c.name}
          </option>
        ))}
      </select>


      <label className="flex items-center gap-2 text-gray-700">
        <input
          type="checkbox"
          checked={inStock}
          onChange={(e) => setInStock(e.target.checked)}
          className="accent-indigo-600"
        />
        In Stock
      </label>
    </div>
  );
}
