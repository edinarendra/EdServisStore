
"use client";
import { useState, useEffect } from "react";
import { Menu, X, Wrench, Star, PhoneCall } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Deteksi scroll & aktif section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["layanan", "kenapa-kami", "kontak"];
      let current = "home";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          current = id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fungsi scroll halus
  const handleScrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Data menu header
  const navItems = [
    { id: "layanan", label: "Layanan", icon: <Wrench size={16} /> },
    { id: "kenapa-kami", label: "Kenapa Kami", icon: <Star size={16} /> },
    { id: "kontak", label: "Kontak", icon: <PhoneCall size={16} /> },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div
          onClick={() => handleScrollTo("home")}
          className="text-2xl font-bold text-yellow-400 cursor-pointer"
        >
          EdServisStore
        </div>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className={`flex items-center gap-2 transition duration-300 ${
                activeSection === item.id
                  ? "text-yellow-400"
                  : isScrolled
                  ? "text-white hover:text-yellow-400"
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
