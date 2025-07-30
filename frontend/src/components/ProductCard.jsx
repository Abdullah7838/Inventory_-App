import { Link } from "react-router-dom";

export default function ProductCard({ product, onDelete }) {
  return (
    <div className="bg-white shadow p-4 rounded">
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Category: {product.categoryId?.name}</p>
      <p>Status: {product.inStock ? "In Stock" : "Out of Stock"}</p>
      <div className="flex gap-2 mt-2">
        <Link
          to={`/products/edit/${product._id}`}
          className="text-indigo-600 hover:underline"
        >
          Edit
        </Link>
        <button
          onClick={() => onDelete(product._id)}
          className="text-red-600 hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
