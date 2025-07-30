import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Navbar() {
  const { token, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-sm border-b border-gray-200 px-4 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">Inventory App</h1>


          <button
            className="md:hidden text-gray-600 hover:text-gray-800 focus:outline-none p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>


          <div className="hidden md:flex gap-6 items-center">
            {token ? (
              <>
                <Link to="/" className="text-gray-600 hover:text-gray-800 font-medium">
                  Products
                </Link>
                <Link to="/products/new" className="text-gray-600 hover:text-gray-800 font-medium">
                  Add Product
                </Link>
                <Link to="/categories/new" className="text-gray-600 hover:text-gray-800 font-medium">
                  Add Category
                </Link>
                <button
                  onClick={logout}
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-600 hover:text-gray-800 font-medium">
                  Login
                </Link>
                <Link to="/signup" className="text-gray-600 hover:text-gray-800 font-medium">
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>


      {menuOpen && (
        <>

          <div 
            className="md:hidden fixed inset-0 bg-black bg-opacity-25 z-40"
            onClick={() => setMenuOpen(false)}
          ></div>
          

          <div className="md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50">
            <div className="p-4 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-500 hover:text-gray-700 p-1"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-4">
              <div className="space-y-4">
                {token ? (
                  <>
                    <Link 
                      to="/" 
                      className="block text-gray-700 hover:text-gray-900 py-2 font-medium"
                      onClick={() => setMenuOpen(false)}
                    >
                      Products
                    </Link>
                    <Link 
                      to="/products/new" 
                      className="block text-gray-700 hover:text-gray-900 py-2 font-medium"
                      onClick={() => setMenuOpen(false)}
                    >
                      Add Product
                    </Link>
                    <Link 
                      to="/categories/new" 
                      className="block text-gray-700 hover:text-gray-900 py-2 font-medium"
                      onClick={() => setMenuOpen(false)}
                    >
                      Add Category
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setMenuOpen(false);
                      }}
                      className="block text-red-600 hover:text-red-700 py-2 font-medium w-full text-left"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link 
                      to="/login" 
                      className="block text-gray-700 hover:text-gray-900 py-2 font-medium"
                      onClick={() => setMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link 
                      to="/signup" 
                      className="block text-gray-700 hover:text-gray-900 py-2 font-medium"
                      onClick={() => setMenuOpen(false)}
                    >
                      Signup
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}