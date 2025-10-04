import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-[#B823C0] mb-4">PARADISO</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Amsterdam's iconic music venue since 1968. Experience legendary performances in a historic church setting.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">VISIT</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Weteringschans 6-8
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  1017 SG Amsterdam
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  The Netherlands
                </a>
              </li>
              <li className="pt-2">
                <a href="#" className="hover:text-white transition-colors">
                  Directions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">INFORMATION</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Paradiso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Rent Our Venue
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Work With Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">FOLLOW US</h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="p-2 bg-white/10 hover:bg-[#B823C0] rounded-full transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 hover:bg-[#B823C0] rounded-full transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 hover:bg-[#B823C0] rounded-full transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 hover:bg-[#B823C0] rounded-full transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>

            <h4 className="font-bold mb-3">NEWSLETTER</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-white/10 rounded-l-full text-sm focus:outline-none focus:ring-2 focus:ring-[#B823C0]"
              />
              <button className="px-6 py-2 bg-[#B823C0] hover:bg-[#701475] rounded-r-full text-sm font-bold transition-colors">
                SIGN UP
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2025 Paradiso Amsterdam. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
