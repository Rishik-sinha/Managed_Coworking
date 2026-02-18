import React, { useState } from 'react';
import { Search, Menu, X, ChevronRight } from 'lucide-react';
import RegisterModal from './RegisterModal';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Our Values', href: '#values' },
  { label: 'Spaces', href: '#spaces' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    setDesktopMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const openRegister = () => {
    setMobileMenuOpen(false);
    setDesktopMenuOpen(false);
    setRegisterOpen(true);
  };

  return (
    <>
    <div className="absolute top-0 left-0 w-full z-20">
      <div className="flex justify-between items-start">
        
        {/* Left Side: The "Cutout" White Area */}
        <div className="bg-white pt-4 pb-3 pl-4 pr-6 sm:pt-6 sm:pb-4 sm:pl-8 sm:pr-12 rounded-br-[2rem] sm:rounded-br-[3rem] relative z-20 flex items-center gap-2 sm:gap-4">
          
          {/* Logo */}
          <a href="#hero" onClick={() => handleNavClick('#hero')} className="font-bold text-lg sm:text-2xl tracking-wide text-[#1A1A1A] flex items-center gap-2 cursor-pointer">
            WORKSPC <span className="text-gray-300 font-light">|</span>
          </a>

          {/* Award Icon & Text — hidden on very small screens */}
          <div className="hidden sm:flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center p-1">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#1A1A1A]">
                 <path d="M6 9a6 6 0 1 0 12 0" />
                 <path d="M12 15l-1 2l1 1l1-1l-1-2Z" />
               </svg>
            </div>
            <div className="text-[10px] font-bold text-gray-500 leading-tight uppercase tracking-wide">
              Best Co-Working<br />Space 2023
            </div>
          </div>
        </div>

        {/* Right Side: Desktop nav */}
        <div className="hidden md:flex items-center gap-6 pt-8 pr-6 lg:pr-12 relative">
          <button className="text-white hover:opacity-80 transition">
            <Search size={22} />
          </button>
          <button 
            className="text-white hover:opacity-80 transition"
            onClick={() => setDesktopMenuOpen(!desktopMenuOpen)}
          >
            {desktopMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
          <button
            onClick={openRegister}
            className="bg-[#1A1A1A] text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-[#8C7A6B] transition-colors duration-300 shadow-lg"
          >
            Register
          </button>

          {/* Desktop Navigation Dropdown */}
          {desktopMenuOpen && (
            <div className="absolute top-full right-0 mt-4 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-slideDown z-50">
              <nav className="py-3">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center justify-between w-full px-6 py-3.5 text-[#1A1A1A] font-medium text-sm hover:bg-gray-50 hover:text-[#8C7A6B] transition-colors group"
                  >
                    {link.label}
                    <ChevronRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#8C7A6B]" />
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>

        {/* Right Side: Mobile hamburger */}
        <div className="flex md:hidden items-center gap-3 pt-4 pr-4">
          <button 
            className="text-white hover:opacity-80 transition p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-2xl rounded-b-3xl z-50 animate-slideDown">
          <div className="flex flex-col py-6 px-4">
            <nav className="flex flex-col mb-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="flex items-center justify-between w-full px-4 py-3.5 text-[#1A1A1A] font-semibold text-base hover:bg-gray-50 rounded-xl transition-colors group"
                >
                  {link.label}
                  <ChevronRight size={18} className="opacity-40 group-hover:opacity-100 group-hover:text-[#8C7A6B] transition-all" />
                </button>
              ))}
            </nav>
            <div className="border-t border-gray-100 my-2"></div>
            <div className="flex flex-col items-center gap-3 pt-4 px-2">
              <button className="flex items-center gap-3 text-[#1A1A1A] font-medium text-sm py-3 w-full justify-center hover:bg-gray-50 rounded-xl transition">
                <Search size={18} /> Search
              </button>
              <button
                onClick={openRegister}
                className="bg-[#1A1A1A] text-white px-10 py-3 rounded-full text-sm font-semibold hover:bg-[#8C7A6B] transition-colors duration-300 shadow-lg w-full max-w-[200px] text-center"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Click-away overlay for desktop menu */}
      {desktopMenuOpen && (
        <div className="fixed inset-0 z-10" onClick={() => setDesktopMenuOpen(false)} />
      )}
    </div>

    {/* Register Modal */}
    <RegisterModal isOpen={registerOpen} onClose={() => setRegisterOpen(false)} />
    </>
  );
};

export default Navbar;