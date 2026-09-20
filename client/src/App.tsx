import { useState } from 'react';
import Navbar from './components/Navbar';
import IndexPage from './pages/IndexPage';

export default function App() {
  // Simple state to track which page is currently active
  const [currentPage, setCurrentPage] = useState<'index' | 'properties' | 'details'>('index');

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-black">
      {/* Permanent Navbar */}
      <Navbar 
        liveCount={0} 
        onNavigate={(page) => setCurrentPage(page)}
        onListProperty={() => alert('List property action clicked!')}
      />

      {/* Dynamic Page Content Area */}
      <main>
        {currentPage === 'index' && <IndexPage />}

        {currentPage === 'properties' && (
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">Properties Page Container</h1>
            <p className="text-gray-600">Filter.tsx, PropertyNav.tsx, and Grid.tsx will go here.</p>
          </div>
        )}

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