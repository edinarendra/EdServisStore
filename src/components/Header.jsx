"use client";
import { useState, useEffect } from "react";
import { Menu, X, Wrench, Star, PhoneCall } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔥 Deteksi scroll & highlight section aktif dengan presisi
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section[id]");
      let current = "home";
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 250; // offset agar lebih cepat terdeteksi
        const sectionHeight = section.offsetHeight;
        const id = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // panggil langsung saat pertama kali load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔧 Scroll halus ke section
  const handleScrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80; // biar gak ketutup header
      const y =
        el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // 📋 Daftar menu navbar
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
          className="text-2xl font-bold text-yellow-400 cursor-pointer transition-transform hover:scale-105"
        >
          EdServisStore
        </div>

        {/* Menu Desktop */}
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

        {/* Tombol Menu Mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menu Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white flex flex-col items-center space-y-4 py-4 transition-all duration-500">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className={`flex items-center gap-2 text-base transition duration-300 ${
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
