import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Home from "./pages/home";
import Header from './components/Header';
import SelectedArticles from './components/SelectedArticles';
import PublicWriting from './components/PublicWriting';
import Talks from './components/Talks';
import InThePress from "./components/InThePress";
import Appointments from "./components/Appointments";

// Optional: Simple 404 component
function NotFound() {
  return (
    <div className="p-10 text-center">
      <h2 className="text-3xl font-bold mb-4">404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

function App() {
  return (
    <Router basename="/adet-site">
      <div className="app-container min-h-screen flex flex-col">
        <Header />
        <main className="main-content flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/selected-articles" element={<SelectedArticles />} />
            <Route path="/public-writing" element={<PublicWriting />} />
            <Route path="/talks" element={<Talks />} />
            <Route path="/in-the-press" element={<InThePress />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
