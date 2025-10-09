"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import TestimonialSection from "./TestimonialSection";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    AOS.init({
      duration: 500,
      once: true,
      easing: "ease-out",
      offset: 100,
    });

    // Bersihkan sisa scroll bar dari render awal
    document.documentElement.style.overflowY = "auto";
    document.body.style.overflow = "";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const images = [
    "/images/Pake 1.jpeg",
    "/images/Pake 2.jpeg",
    "/images/Pake 3.jpg",
    "/images/pake 4.jpg",
    "/images/pake 5.jpg",
    "/images/pake 6.jpeg",
    "/images/Pake 7.jpg",
  ];

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
    document.body.classList.add("lightbox-open");
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.classList.remove("lightbox-open");
  };

  return (
    <main className="text-gray-800 overflow-x-hidden relative">
      {/* ================= HERO SECTION ================= */}
      <section
        id="hero"
        className="relative text-white flex items-center justify-center text-center px-6 h-[100vh] sm:h-[100vh] overflow-visible"
        data-aos="fade-up"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/servis.png')" }}
        ></div>

        {/* Lapisan Gelap */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-black/80"></div>

        {/* Konten */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
            Servis HP & Laptop{" "}
            <span className="text-yellow-400">Cepat, Aman, dan Bergaransi</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8">
            Solusi terpercaya untuk semua kerusakan gadget Anda – ditangani oleh
            teknisi berpengalaman.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#layanan"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-8 rounded-full shadow-md transition-all"
            >
              Lihat Layanan
            </a>
            <a
              href="#kontak"
              className="border border-yellow-400 hover:bg-yellow-400/20 text-yellow-400 font-semibold py-3 px-8 rounded-full transition-all"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>

      {/* ================= KENAPA KAMI ================= */}
      <section
        id="kenapa-kami"
        className="scroll-mt-24 py-24 bg-gray-50 text-center"
        data-aos="fade-up"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12">
            Kenapa Memilih <span className="text-blue-600">EdServisStore?</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "⚡",
                title: "Cepat & Efisien",
                desc: "Proses servis cepat tanpa mengorbankan kualitas.",
              },
              {
                icon: "🧰",
                title: "Teknisi Berpengalaman",
                desc: "Dikerjakan oleh profesional berpengalaman.",
              },
              {
                icon: "🛡️",
                title: "Bergaransi",
                desc: "Semua layanan bergaransi sesuai jenis perbaikan.",
              },
              {
                icon: "💬",
                title: "Konsultasi Gratis",
                desc: "Kamu bisa konsultasi dulu tanpa biaya.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-blue-600 text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LAYANAN KAMI ================= */}
      <section
        id="layanan"
        className="py-20 bg-white text-center"
        data-aos="fade-up"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Layanan <span className="text-blue-600">Kami</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "📱",
                title: "Servis HP",
                desc: "Perbaikan semua jenis kerusakan smartphone.",
              },
              {
                icon: "💻",
                title: "Servis Laptop",
                desc: "Perbaikan laptop semua merek dan tipe.",
              },
              {
                icon: "🖥️",
                title: "Rakit PC",
                desc: "Rakit PC untuk gaming, editing, dan kerja.",
              },
              {
                icon: "🛒",
                title: "Aksesoris & Sparepart",
                desc: "Jual aksesoris & sparepart gadget berkualitas.",
              },
            ].map((layanan, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="text-blue-600 text-5xl mb-4">
                  {layanan.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{layanan.title}</h3>
                <p className="text-gray-600">{layanan.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HASIL SERVIS ================= */}
      <section
        id="hasil"
        className="py-20 bg-gray-100 text-center"
        data-aos="fade-up"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-800">
            Hasil <span className="text-yellow-500">Servis Kami</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={src}
                  alt={`Hasil Servis ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex justify-center items-center text-white font-medium">
                  Lihat Detail
                </div>
              </div>
            ))}
          </div>

          {isOpen && (
            <Lightbox
              open={isOpen}
              close={closeLightbox}
              slides={images.map((src) => ({ src }))}
              index={photoIndex}
              on={{ view: ({ index }) => setPhotoIndex(index) }}
              controller={{ closeOnBackdropClick: true }}
              carousel={{ finite: true }}
            />
          )}
        </div>
      </section>

      {/* ================= TESTIMONIAL ================= */}
      <TestimonialSection />

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
        <span className="hidden sm:inline text-xs font-medium">
          Chat Sekarang
        </span>
      </a>
    </main>
  );
}
