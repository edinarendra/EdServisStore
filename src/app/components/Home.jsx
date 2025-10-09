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

    // Bersihkan sisa scroll bar
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

<section
  id="home"
  className="min-h-screen flex flex-col items-center justify-center text-center bg-[radial-gradient(circle_at_center,_#444444_0%,_#1a1a1a_50%,_#000000_100%)]
 px-6"
>
  <img
    src="/images/logo.png"
    alt="EdServisStore Logo"
    className="w-28 h-28 mb-4 object-contain rounded-full shadow-lg border-2 border-yellow-400"
  />

  <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 text-yellow-400">
    EdServisStore
  </h1>

  <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
    Servis HP & Laptop{" "}
    <span className="text-yellow-400">Cepat, Aman, dan Bergaransi</span>
  </h2>

  <p className="text-gray-300 max-w-2xl font-light italic tracking-wide leading-relaxed text-[16px] sm:text-lg font-[Playfair_Display]">
  Kami menyediakan layanan servis profesional untuk smartphone, laptop, dan
  komputer dengan garansi resmi serta pelayanan cepat.
</p>

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
        id="hasil-servis"
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

      {/* ================= TESTIMONI ================= */}
      <section id="testimoni">
        <TestimonialSection />
      </section>

      {/* ================= KONTAK ================= */}
      <section
        id="kontak"
        className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 text-center"
        data-aos="fade-up"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            Hubungi <span className="text-blue-600">Kami</span>
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
                <div className="w-16 h-16 flex items-center justify-center mb-3 rounded-full border border-gray-300 bg-gradient-to-br from-white to-gray-100 group-hover:border-blue-400 transition">
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="w-8 h-8 opacity-60 group-hover:opacity-100 group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition">
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
        className="py-20 bg-gradient-to-bl from-gray-50 via-white to-blue-50 text-center"
        data-aos="fade-up"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            Temukan Kami di <span className="text-blue-600">Marketplace</span>
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
                className="group w-32 h-32 flex flex-col items-center justify-center bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100 hover:border-blue-300"
              >
                <img
                  src={market.img}
                  alt={market.alt}
                  className="w-16 h-16 object-contain mb-2 group-hover:scale-110 transition-transform"
                />
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition">
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
        <span className="hidden sm:inline text-xs font-medium">
          Chat Sekarang
        </span>
      </a>
    </main>
  );
}
