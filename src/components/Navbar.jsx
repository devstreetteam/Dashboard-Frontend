import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-400">
            MyLogo
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-blue-400 transition">Home</a>
            <a href="#" className="hover:text-blue-400 transition">About</a>
            <a href="#" className="hover:text-blue-400 transition">Services</a>
            <a href="#" className="hover:text-blue-400 transition">Contact</a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4 space-y-2">
          <a href="#" className="block hover:text-blue-400">Home</a>
          <a href="#" className="block hover:text-blue-400">About</a>
          <a href="#" className="block hover:text-blue-400">Services</a>
          <a href="#" className="block hover:text-blue-400">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;