import { useEffect, useState } from 'react';
import API from '../services/api';
import ProductCard from '../components/ProductCard';
import FilterBar from '../components/FilterBar';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [inStock, setInStock] = useState(false);

  const fetchProducts = async () => {
    const res = await API.get('/products', {
      params: { search, category, inStock }
    });
    setProducts(res.data);
  };

  useEffect(() => {
    API.get('/categories').then(res => setCategories(res.data));
    fetchProducts();
  }, [search, category, inStock]);

  const deleteProduct = async (id) => {
    await API.delete(`/products/${id}`);
    fetchProducts();
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Product Catalog</h1>
          <p className="text-gray-500 mt-1">Browse all available products below</p>
        </div>

        {/* Filters */}
        <div className="bg-gray-50 border border-gray-200 p-4 rounded-md mb-6">
          <FilterBar
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
            inStock={inStock}
            setInStock={setInStock}
            categories={categories}
          />
        </div>

        {/* Product Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(p => (
              <ProductCard key={p._id} product={p} onDelete={deleteProduct} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No products found.</p>
            <button
              onClick={() => {
                setSearch('');
                setCategory('');
                setInStock(false);
              }}
              className="mt-4 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
