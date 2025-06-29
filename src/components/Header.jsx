import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white shadow-md fixed w-full z-50 top-0">
      <div className="w-full max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Mobile-only Logo */}
        <div className="text-lg font-semibold md:hidden">Dr A.T. Dinika</div>

        {/* Desktop Nav Centered */}
        <nav className="hidden md:flex justify-center w-full space-x-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/selected-articles" className="hover:text-gray-300">Selected Articles</Link>
          <Link to="/public-writing" className="hover:text-gray-300">Public Writing</Link>
          <Link to="/talks" className="hover:text-gray-300">Talks</Link>
          <Link to="/in-the-press" className="hover:text-gray-300">In the Press</Link>
          <Link to="/appointments" className="hover:text-gray-300">Appointments</Link>
          <a 
            href="https://data-workers.org" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            Data Workers' Inquiry
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-800 px-4 pb-4 space-y-3">
          <Link to="/" className="block hover:text-gray-300" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/selected-articles" className="block hover:text-gray-300" onClick={() => setMenuOpen(false)}>Selected Articles</Link>
          <Link to="/public-writing" className="block hover:text-gray-300" onClick={() => setMenuOpen(false)}>Public Writing</Link>
          <Link to="/talks" className="block hover:text-gray-300" onClick={() => setMenuOpen(false)}>Talks</Link>
          <Link to="/in-the-press" className="block hover:text-gray-300" onClick={() => setMenuOpen(false)}>In the Press</Link>
          <Link to="/appointments" className="block hover:text-gray-300" onClick={() => setMenuOpen(false)}>Appointments</Link>
          <a 
            href="https://data-workers.org" 
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Data Workers' Inquiry
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
