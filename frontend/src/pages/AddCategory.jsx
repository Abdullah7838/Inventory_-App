import { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function AddCategory() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/categories', { name });
      alert('Category created!');
      navigate('/products/new');
    } catch (err) {
      alert('Failed to add category');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-md shadow-md"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Add Category
        </h2>

        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Category Name</label>
          <input
            type="text"
            placeholder="e.g. Electronics"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          Add Category
        </button>
      </form>
    </div>
  );
}
