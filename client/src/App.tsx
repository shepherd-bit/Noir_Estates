import { useState } from 'react';
import IndexPage from './pages/IndexPage';
import PropertiesPage from './pages/PropertiesPage';

export default function App() {
  // Simple state to track which page is currently active
  const [currentPage, setCurrentPage] = useState<'index' | 'properties' | 'details'>('index');

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-black">
      {/* Permanent Navbar */}
      

      {/* Dynamic Page Content Area */}
      <main>
        {currentPage === 'index' && <IndexPage />}

        {currentPage === 'properties' && <PropertiesPage />}

        {currentPage === 'details' && (
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">Details Page Container</h1>
            <p className="text-gray-600">Gallery.tsx, Specs.tsx, and Contact.tsx will go here.</p>
          </div>
        )}
      </main>
    </div>
  );
}