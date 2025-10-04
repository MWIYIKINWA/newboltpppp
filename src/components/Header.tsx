import { Menu, X, Search } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-8">
            <h1 className="text-3xl font-bold text-[#B823C0] tracking-tight">PARADISO</h1>

            <nav className="hidden lg:flex space-x-6">
              <a href="#" className="text-sm font-medium hover:text-[#B823C0] transition-colors">AGENDA</a>
              <a href="#" className="text-sm font-medium hover:text-[#B823C0] transition-colors">VISIT</a>
              <a href="#" className="text-sm font-medium hover:text-[#B823C0] transition-colors">ABOUT</a>
              <a href="#" className="text-sm font-medium hover:text-[#B823C0] transition-colors">RENT</a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search size={20} />
            </button>

            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden lg:flex items-center space-x-2">
              <button className="px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded transition-colors">EN</button>
              <span className="text-gray-300">|</span>
              <button className="px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded transition-colors">NL</button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="px-4 py-4 space-y-3">
            <a href="#" className="block text-lg font-medium hover:text-[#B823C0] transition-colors">AGENDA</a>
            <a href="#" className="block text-lg font-medium hover:text-[#B823C0] transition-colors">VISIT</a>
            <a href="#" className="block text-lg font-medium hover:text-[#B823C0] transition-colors">ABOUT</a>
            <a href="#" className="block text-lg font-medium hover:text-[#B823C0] transition-colors">RENT</a>
            <div className="flex items-center space-x-2 pt-3 border-t">
              <button className="px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded transition-colors">EN</button>
              <span className="text-gray-300">|</span>
              <button className="px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded transition-colors">NL</button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
