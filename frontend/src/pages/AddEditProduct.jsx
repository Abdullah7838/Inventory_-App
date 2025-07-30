import { useEffect, useState } from 'react';
import API from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';

export default function AddEditProduct() {
  const [form, setForm] = useState({ name: '', price: '', categoryId: '', inStock: true });
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const fetchProduct = async () => {
    const res = await API.get(`/products/${id}`);
    setForm(res.data);
  };

  useEffect(() => {
    API.get('/categories').then(res => setCategories(res.data));
    if (id) fetchProduct();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await API.put(`/products/${id}`, form);
    } else {
      await API.post('/products', form);
    }
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-md shadow-md"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {id ? 'Edit' : 'Add'} Product
        </h2>

        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Name</label>
          <input
            type="text"
            placeholder="Product Name"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Price</label>
          <input
            type="number"
            placeholder="100"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={form.price}
            onChange={e => setForm({ ...form, price: e.target.value })}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Category</label>
          <select
            value={form.categoryId}
            onChange={e => setForm({ ...form, categoryId: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          >
            <option value="">Select Category</option>
            {categories.map(c => (
              <option key={c._id} value={c._id}>{c.name}</option>
            ))}
          </select>
        </div>

        <div className="mb-6 flex items-center gap-2">
          <input
            type="checkbox"
            checked={form.inStock}
            onChange={e => setForm({ ...form, inStock: e.target.checked })}
          />
          <label className="text-gray-700">In Stock</label>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          {id ? 'Update' : 'Add'} Product
        </button>
      </form>
    </div>
  );
}
