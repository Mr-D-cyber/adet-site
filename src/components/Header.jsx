import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <nav>
        <ul className="flex space-x-6 justify-center">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/selected-articles">Selected Articles</Link></li>
          <li><Link to="/public-writing">Public Writing</Link></li>
          <li><Link to="/talks">Talks</Link></li>
          <li><Link to="/in-the-press">In the Press</Link></li>
          <li><Link to="/appointments">Appointments</Link></li>
          <li>
            <a 
              href="https://data-workers.org" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              Data Workers' Inquiry
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
