"use client";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Wrench,
  Star,
  PhoneCall,
  ClipboardCheck,
  MessageSquare,
  ShoppingBag,
} from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Urutan sesuai permintaan baru
      const sections = [
        "kenapa-kami",
        "layanan",
        "hasil-servis",
        "testimoni",
        "kontak",
        "market-place",
      ];

      let current = "home";
      let midpoint = window.innerHeight / 3;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= midpoint && rect.bottom >= midpoint) {
            current = id;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Urutan menu disesuaikan dengan keinginan
  const navItems = [
    { id: "kenapa-kami", label: "Kenapa Kami", icon: <Star size={16} /> },
    { id: "layanan", label: "Layanan", icon: <Wrench size={16} /> },
    { id: "hasil-servis", label: "Hasil Servis", icon: <ClipboardCheck size={16} /> },
    { id: "testimoni", label: "Testimoni", icon: <MessageSquare size={16} /> },
    { id: "kontak", label: "Kontak", icon: <PhoneCall size={16} /> },
    { id: "market-place", label: "Market Place", icon: <ShoppingBag size={16} /> },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <div
          onClick={() => handleScrollTo("home")}
          className="text-2xl font-bold text-yellow-400 cursor-pointer"
        >
          EdServisStore
        </div>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className={`flex items-center gap-2 transition duration-300 ${
                activeSection === item.id
                  ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                  : "text-white hover:text-yellow-400"
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        {/* Tombol menu mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menu mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white flex flex-col items-center space-y-4 py-4 transition-all duration-500">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className={`flex items-center gap-2 text-base ${
                activeSection === item.id
                  ? "text-yellow-400"
                  : "hover:text-yellow-400"
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
