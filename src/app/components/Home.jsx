"use client";
import TestimonialSection from "./TestimonialSection";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [
    "/images/pake 1.jpeg",
    "/images/pake 2.jpeg",
    "/images/pake 3.jpg",
    "/images/pake 4.jpg",
    "/images/pake 5.jpg",
    "/images/pake 6.jpeg",
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <main className="text-gray-800 scroll-smooth overflow-x-hidden transition-none motion-safe:transform-none">

      {/* Hero Section */}
      <section
        id="hero"
        className="relative text-white py-28 sm:py-32 px-6 text-center overflow-hidden min-h-[auto]"
        data-aos="fade-up"
      >
        <div
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{ backgroundImage: "url('/images/servis.png')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-black/80"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
            Servis HP & Laptop{" "}
            <span className="text-yellow-400">Cepat, Aman, dan Bergaransi</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8">
            Solusi terpercaya untuk semua kerusakan gadget Anda – ditangani langsung oleh teknisi berpengalaman.
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

 {/* Kenapa Kami */}
<section
  id="kenapa-kami"
  className="scroll-mt-24 py-24 bg-gray-50 text-center relative z-10"
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
          desc: "Proses servis dilakukan dengan cepat tanpa mengorbankan kualitas pekerjaan.",
        },
        {
          icon: "🧰",
          title: "Teknisi Berpengalaman",
          desc: "Dikerjakan langsung oleh teknisi profesional dengan pengalaman bertahun-tahun.",
        },
        {
          icon: "🛡️",
          title: "Bergaransi",
          desc: "Semua layanan servis kami dilengkapi dengan garansi sesuai jenis perbaikan.",
        },
        {
          icon: "💬",
          title: "Konsultasi Gratis",
          desc: "Kamu bisa konsultasi dulu tanpa biaya sebelum melakukan servis.",
        },
      ].map((card, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-all duration-300"
        >
          <div className="text-blue-600 mb-4 text-5xl">{card.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
          <p className="text-gray-600">{card.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Layanan Kami */}
      <section id="layanan" className="py-20 bg-white text-center" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12">
            Layanan <span className="text-blue-600">Kami</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "📱", title: "Servis HP", desc: "Perbaikan semua jenis kerusakan smartphone — dari software hingga hardware." },
              { icon: "💻", title: "Servis Laptop", desc: "Penanganan kerusakan laptop semua merek dengan sparepart berkualitas." },
              { icon: "🖥️", title: "Rakit PC", desc: "Rakit PC sesuai kebutuhan — gaming, editing, atau kantor, dengan harga bersahabat." },
              { icon: "🛒", title: "Aksesoris & Sparepart", desc: "Tersedia berbagai aksesoris dan sparepart gadget berkualitas dengan harga terbaik." },
            ].map((layanan, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="text-blue-600 text-5xl mb-4">{layanan.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{layanan.title}</h3>
                <p className="text-gray-600">{layanan.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hasil Servis */}
      <section id="hasil" className="py-20 bg-gray-100 text-center" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-800">
            Hasil <span className="text-yellow-500">Servis Kami</span>
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Beberapa contoh hasil pengerjaan kami — mulai dari servis HP, laptop, hingga rakit PC.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer will-change-transform"
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
              >
                <img
                  src={src}
                  alt={`Hasil Servis ${index + 1}`}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                  <span className="text-white font-semibold">Lihat Detail</span>
                </div>
              </div>
            ))}
          </div>

          {isOpen && (
            <Lightbox
              open={isOpen}
              close={() => setIsOpen(false)}
              slides={images.map((src) => ({ src }))}
              index={photoIndex}
              carousel={{ finite: false }}
              on={{ view: ({ index }) => setPhotoIndex(index) }}
            />
          )}
        </div>
      </section>

      {/* Kontak */}
      <section id="kontak" className="py-20 bg-gradient-to-br from-blue-50 to-white" data-aos="fade-up-left">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
            Terhubung dengan <span className="text-blue-600">EdServisStore</span>
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Kami siap melayani pertanyaan dan pemesanan melalui berbagai platform berikut.
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                href: "https://www.facebook.com/edi.aput.2025",
                src: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
                alt: "Facebook",
                color: "hover:bg-[#1877F2]/10",
              },
              {
                href: "https://www.instagram.com/ediaput411/",
                src: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
                alt: "Instagram",
                color: "hover:bg-gradient-to-br hover:from-pink-500/20 hover:to-yellow-500/20",
              },
              {
                href: "https://wa.me/6289671577111",
                src: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
                alt: "WhatsApp",
                color: "hover:bg-[#25D366]/10",
              },
              {
                href: "https://mail.google.com/mail/?view=cm&fs=1&to=ediaput200@gmail.com",
                src: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
                alt: "Email",
                color: "hover:bg-red-500/10",
              },
            ].map((icon, i) => (
              <a
                key={i}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-20 h-20 flex flex-col items-center justify-center rounded-full bg-white shadow-md transition-all hover:scale-110 ${icon.color}`}
              >
                <img src={icon.src} alt={icon.alt} className="w-8 h-8 mb-2" />
                <span className="text-xs text-gray-600 font-medium">
                  {icon.alt}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-12">
            <a
              href="https://wa.me/6289671577111"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium shadow-lg transition-all"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                alt="WhatsApp"
                className="w-5 h-5"
              />
              Chat via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Marketplace */}
      <section id="marketplace" className="py-20 bg-gradient-to-br from-white to-blue-50" data-aos="fade-up-right">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
            Temukan Kami di <span className="text-blue-600">Marketplace</span>
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Dapatkan produk dan layanan kami secara online melalui toko resmi EdServisStore di berbagai platform berikut.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
            {[
              {
                href: "https://www.tokopedia.com/edsparepartstore",
                img: "/images/tokopedia.png",
                name: "Tokopedia",
                gradient: "from-green-100 to-green-50",
              },
              {
                href: "https://www.shopee.co.id/edsparepartstore",
                img: "/images/shopee.png",
                name: "Shopee",
                gradient: "from-orange-100 to-orange-50",
              },
            ].map((market, i) => (
              <a
                key={i}
                href={market.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`block rounded-2xl bg-gradient-to-br ${market.gradient} p-8 border-2 border-transparent shadow-md hover:shadow-xl hover:border-blue-400 transition-all duration-300`}
              >
                <div className="flex flex-col items-center justify-center gap-4">
                  <img
                    src={market.img}
                    alt={market.name}
                    className="w-20 h-20 object-contain"
                    loading="lazy"
                  />
                  <h3 className="text-xl font-semibold text-gray-800">
                    {market.name}
                  </h3>
                  <span className="inline-block mt-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition">
                    Kunjungi Toko
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
<TestimonialSection />


{/* FLOATING WHATSAPP BUTTON */}
<a
  href="https://wa.me/6289671577111"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 z-[9999] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-bounce transition-all duration-300"
  title="Hubungi via WhatsApp"
>
  <img
    src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
    alt="WhatsApp"
    className="w-6 h-6"
    loading="lazy"
  />
  <span className="hidden sm:inline text-xs font-medium">
    Chat Sekarang
  </span>
</a>

    </main>
  );
}
