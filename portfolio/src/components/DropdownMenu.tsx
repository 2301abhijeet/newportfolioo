import { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'Projects', id: 'projects' },
  { name: 'Qualification', id: 'qualification' },
  { name: 'Experiences', id: 'experience' },
  { name: 'Review', id: 'review' },
  { name: 'Contact', id: 'contact' },
];

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Toggle function
  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Handle smooth scroll
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Wait for the closing animation to start before calculating and jumping
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // GSAP Animation logic
  useEffect(() => {
    if (!menuRef.current) return;

    if (isOpen) {
      // Menu opening animation
      gsap.to(menuRef.current, {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.35,
        ease: 'power2.out',
        display: 'block',
      });
    } else {
      // Menu closing animation
      gsap.to(menuRef.current, {
        scale: 0.9,
        opacity: 0,
        y: -15,
        duration: 0.25,
        ease: 'power2.inOut',
        onComplete: () => {
          if (menuRef.current) {
            menuRef.current.style.display = 'none';
          }
        },
      });
    }
  }, [isOpen]);

  return (
    <div className="fixed top-6 right-6 z-50">
      {/* Hamburger Toggle Button */}
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white shadow-lg transition-transform hover:scale-105 hover:bg-black/70 focus:outline-none"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Animated Dropdown Menu */}
      <div
        ref={menuRef}
        className="absolute right-0 top-16 mt-2 hidden w-[240px] rounded-2xl bg-[#0a0a0a] border border-white/10 p-2 shadow-[0_8px_32px_rgba(0,0,0,0.8)] backdrop-blur-xl origin-top-right transform-gpu opacity-0 scale-90 -translate-y-[15px]"
      >
        <nav className="flex flex-col space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className="group flex items-center rounded-xl px-4 py-3 text-[18px] font-medium text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white hover:translate-x-1"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
