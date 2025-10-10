"use client";

import { useEffect, useState, useCallback } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import TestimonialSection from "./TestimonialSection";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // === INIT AOS ===
  useEffect(() => {
    if (typeof window === "undefined") return;

    AOS.init({
      duration: 500,
      once: true,
      easing: "ease-out",
      offset: 100,
      mirror: false,
    });
  }, []);

  // === LIGHTBOX DATA (untuk hasil servis) ===
  const slides = [
    { src: "/images/pake 1.jpeg" },
    { src: "/images/pake 2.jpeg" },
    { src: "/images/pake 3.jpg" },
    { src: "/images/pake 4.jpg" },
    { src: "/images/pake 5.jpg" },
    { src: "/images/pake 6.jpeg" },
    { src: "/images/pake 7.jpg" },
  ];

  // === TSPARTICLES CONFIG ===
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    fullScreen: { enable: false },
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" } },
      modes: { repulse: { distance: 100, duration: 0.4 } },
    },
    particles: {
      color: { value: ["#FFD700", "#FFFFFF"] },
      links: {
        color: "#FFD700",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: false,
        speed: 1.2,
        straight: false,
      },
      number: { value: 70, density: { enable: true, area: 800 } },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  return (
    <main className="text-gray-800 overflow-x-hidden relative">
      {/* ================= HERO SECTION ================= */}
      <div className="relative min-h-screen bg-[radial-gradient(circle_at_center,_#444444_0%,_#1a1a1a_50%,_#000000_100%)] overflow-hidden">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          className="absolute inset-0 w-full h-full -z-0 pointer-events-none"
        />

        <motion.section
          id="home"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6"
        >
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-t from-yellow-500/10 to-transparent blur-3xl"></div>
          </div>

          <motion.img
            src="/images/logo.png"
            alt="EdServisStore Logo"
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="w-28 h-28 mb-6 object-contain rounded-full border border-yellow-500/60 
                       shadow-[0_0_25px_rgba(255,215,0,0.25)]"
          />

          <h1 className="text-5xl sm:text-6xl font-extrabold mb-3 
                         bg-gradient-to-r from-yellow-400 to-yellow-100 text-transparent bg-clip-text 
                         tracking-tight drop-shadow-[0_0_10px_rgba(255,215,0,0.25)]">
            EdServisStore
          </h1>

          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-100 mb-6">
            Servis HP & Laptop{" "}
            <span className="text-yellow-400 font-bold">
              Cepat, Aman, dan Bergaransi
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl font-light italic tracking-wide leading-relaxed text-[16px] sm:text-lg">
            Kami menyediakan layanan servis profesional untuk smartphone, laptop, dan komputer
            dengan garansi resmi serta pelayanan cepat dan transparan.
          </p>

          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent mt-8 opacity-70"></div>

          <a
            href="#kontak"
            className="mt-10 inline-block bg-yellow-400 text-black font-semibold px-8 py-3 
                       rounded-full hover:bg-yellow-300 transition-all shadow-[0_0_10px_rgba(255,215,0,0.3)]"
          >
            Chat Sekarang
          </a>
        </motion.section>
      </div>

      {/* ================= KENAPA KAMI ================= */}
      <section id="kenapa-kami" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Kenapa Memilih <span className="text-yellow-500">EdServisStore</span>?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Kami tidak hanya memperbaiki perangkat Anda, tapi juga memberikan rasa aman,
            transparansi, dan kualitas terbaik dengan garansi resmi.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cepat & Profesional",
                desc: "Teknisi berpengalaman siap menyelesaikan servis dengan waktu efisien tanpa mengorbankan kualitas.",
              },
              {
                title: "Garansi Resmi",
                desc: "Setiap servis kami sertakan garansi resmi agar pelanggan merasa lebih tenang.",
              },
              {
                title: "Transparan & Aman",
                desc: "Semua proses dijelaskan secara terbuka — tanpa biaya tersembunyi dan hasil yang jujur.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white shadow-lg p-6 rounded-2xl"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <h3 className="text-xl font-semibold text-yellow-500 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LAYANAN ================= */}
      <section id="layanan" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Layanan <span className="text-yellow-500">Kami</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Kami melayani berbagai kebutuhan servis dan perbaikan perangkat digital Anda dengan harga bersahabat.
          </p>

          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
            {[
              { title: "Servis HP", desc: "Perbaikan segala merek smartphone dengan jaminan keaslian suku cadang." },
              { title: "Servis Laptop", desc: "Mulai dari ganti LCD, keyboard, hingga instalasi software." },
              { title: "Rakit PC", desc: "Kami bantu merakit PC sesuai kebutuhan gaming, editing, atau kantor." },
              { title: "Aksesoris", desc: "Berbagai aksesoris berkualitas untuk menunjang perangkat Anda." },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-gray-50 rounded-2xl shadow-lg"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <h3 className="text-lg font-semibold text-yellow-500 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HASIL SERVIS (FIXED) ================= */}
      <section id="hasil-servis" className="py-20 bg-gray-50 relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Hasil <span className="text-yellow-500">Servis Kami</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Beberapa dokumentasi hasil servis pelanggan kami yang puas dengan layanan EdServisStore.
          </p>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
            {slides.map((item, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300"
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
              >
                <img
                  src={item.src}
                  alt={`Hasil Servis ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>

          {isOpen && (
            <Lightbox
              open={isOpen}
              close={() => setIsOpen(false)} // ✅ tombol X fix
              slides={slides}
              index={photoIndex}
            />
          )}
        </div>
      </section>

      <TestimonialSection />

      {/* ================= KONTAK ================= */}
      <section
        id="kontak"
        className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 text-center"
        data-aos="fade-up"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            Hubungi <span className="text-yellow-500">Kami</span>
          </h2>
          <p className="text-gray-600 mb-12 text-base sm:text-lg">
            Terhubung dengan kami melalui platform berikut.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-center">
            {[
              {
                href: "https://www.facebook.com/edi.aput.2025/",
                icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
                label: "Facebook",
              },
              {
                href: "https://www.instagram.com/ediaput411/",
                icon: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
                label: "Instagram",
              },
              {
                href: "https://wa.me/6289671577111",
                icon: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
                label: "WhatsApp",
              },
              {
                href: "mailto:ediaput200@gmail.com",
                icon: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
                label: "Email",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 flex items-center justify-center mb-3 rounded-full border border-gray-300 bg-gradient-to-br from-white to-gray-100 group-hover:border-yellow-400 transition">
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="w-8 h-8 opacity-60 group-hover:opacity-100 group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-yellow-500 transition">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MARKETPLACE ================= */}
      <section
        id="market-place"
        className="py-20 bg-gradient-to-bl from-gray-50 via-white to-yellow-50 text-center"
        data-aos="fade-up"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            Temukan Kami di <span className="text-yellow-500">Marketplace</span>
          </h2>
          <p className="text-gray-600 mb-10 text-base sm:text-lg">
            Beli produk dan aksesoris kami secara online dengan mudah dan aman.
          </p>

          <div className="flex flex-wrap justify-center gap-10">
            {[
              {
                href: "https://www.tokopedia.com/edsparepartstore",
                img: "/images/tokopedia.png",
                alt: "Tokopedia",
              },
              {
                href: "https://www.shopee.co.id/edsparepartstore",
                img: "/images/shopee.png",
                alt: "Shopee",
              },
            ].map((market, i) => (
              <a
                key={i}
                href={market.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-32 h-32 flex flex-col items-center justify-center bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100 hover:border-yellow-400"
              >
                <img
                  src={market.img}
                  alt={market.alt}
                  className="w-16 h-16 object-contain mb-2 group-hover:scale-110 transition-transform"
                />
                <span className="text-sm font-medium text-gray-700 group-hover:text-yellow-500 transition">
                  {market.alt}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHATSAPP FLOAT BUTTON ================= */}
      <a
        href="https://wa.me/6289671577111"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-[9999] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition-all"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
          className="w-6 h-6"
        />
        <span className="hidden sm:inline text-xs font-medium">Chat Sekarang</span>
      </a>
    </main>
  );
}
