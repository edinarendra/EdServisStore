"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";


export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <main className="text-gray-800">
      {/* Hero Section */}
      <section
        className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20 px-4 text-center"
        data-aos="fade-up"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Servis HP & Laptop Cepat dan Bergaransi
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8">
            Solusi terpercaya untuk semua kerusakan gadget Anda – cepat, aman, dan profesional.
          </p>
          <a
            href="#kontak"
            className="inline-block bg-white text-blue-700 font-semibold py-3 px-6 rounded-full shadow hover:bg-gray-200 transition"
          >
            Hubungi Kami
          </a>
        </div>
      </section>

      {/* Layanan Section */}
      <section id="layanan" className="py-20 px-4 bg-gray-100" data-aos="fade-up">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Layanan Kami</h2>
          <p className="text-gray-600 mb-12 text-sm sm:text-base">
            Kami menyediakan berbagai layanan servis untuk gadget Anda dengan kualitas terbaik.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Servis HP */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition" data-aos="zoom-in">
              <h3 className="text-lg font-semibold mb-3 text-blue-700">Servis HP</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 text-left">
                <li>Ganti layar/LCD pecah</li>
                <li>Baterai cepat habis / drop</li>
                <li>HP tidak bisa di-charge</li>
                <li>Masalah software (bootloop, error sistem)</li>
                <li>Kamera tidak berfungsi</li>
              </ul>
            </div>

            {/* Servis Laptop */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition" data-aos="zoom-in">
              <h3 className="text-lg font-semibold mb-3 text-blue-700">Servis Laptop</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 text-left">
                <li>Laptop lemot atau freeze</li>
                <li>Mati total atau tidak bisa menyala</li>
                <li>Keyboard / touchpad rusak</li>
                <li>Overheat atau cepat panas</li>
                <li>Instal ulang dan perbaikan software</li>
              </ul>
            </div>

            {/* Ganti Sparepart */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition" data-aos="zoom-in">
              <h3 className="text-lg font-semibold mb-3 text-blue-700">Ganti Sparepart</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 text-left">
                <li>Baterai original berbagai merek</li>
                <li>Penggantian LCD / layar sentuh</li>
                <li>Speaker, mic, kamera, dan sensor</li>
                <li>Komponen laptop (RAM, SSD, kipas)</li>
                <li>Semua pemasangan bergaransi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

            {/* Kenapa Memilih Kami */}
            <section id="keunggulan" className="py-20 px-4 bg-gradient-to-b from-white to-gray-100" data-aos="fade-right">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Kenapa Memilih Kami?</h2>
          <p className="text-gray-600 mb-12 text-sm sm:text-base">
            Pelayanan terbaik dengan kualitas tidak tertandingi.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition" data-aos="flip-left">
              <h3 className="text-lg font-semibold mb-2 text-blue-700">Garansi Servis</h3>
              <p className="text-sm text-gray-600">Garansi hingga 1-12 bulan untuk semua layanan.</p>
            </div>
            <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition" data-aos="flip-up">
              <h3 className="text-lg font-semibold mb-2 text-blue-700">Teknisi Berpengalaman</h3>
              <p className="text-sm text-gray-600">
                Tim profesional dengan pengalaman menangani banyak kerusakan android, iPhone, Windows, ataupun MacBook.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition" data-aos="flip-right">
            <h3 className="text-lg font-semibold mb-2 text-blue-700">Home Servis / COD</h3>
<p className="text-sm text-gray-600">Layanan perbaikan langsung ke rumah atau bayar di tempat untuk kenyamanan Anda.</p>

            </div>
          </div>
        </div>
      </section>


      {/* Before & After Section */}
<section id="before-after" className="py-20 px-4 bg-gray-100">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Hasil Servis Kami</h2>
    <p className="text-gray-600 mb-12 text-sm sm:text-base">
      Lihat hasil Gadget yang diservis oleh tim kami.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {[
        { title: "Servis Handphone", before: "images/Pake 1.jpeg", after: "images/Pake 3.jpg" },
        { title: "Servis Laptop", before: "images/pake 6.jpeg", after: "images/Pake 7.jpg" },
        { title: "Rakit Komputer", before: "images/pake 5.jpg", after: "images/pake 4.jpg" },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          className="bg-white p-4 rounded-xl shadow hover:shadow-md transition"
        >
          <h3 className="text-sm font-semibold mb-2 text-blue-700">{item.title}</h3>
          <div className="flex gap-2">
            <div className="w-1/2">
              <img src={item.before} alt="Before" className="rounded-lg object-cover w-full h-40" />
              <p className="text-xs text-gray-500 mt-1"></p>
            </div>
            <div className="w-1/2">
              <img src={item.after} alt="After" className="rounded-lg object-cover w-full h-40" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Kontak Kami */}
      <section id="kontak" className="py-16 bg-white px-4" data-aos="fade-up-left">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Kontak Kami di Sosial Media</h2>
          <p className="text-gray-600 mb-10 text-sm sm:text-base">
            Terhubung dengan kami melalui platform berikut:
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://www.facebook.com/edi.aput.2025" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-8 h-8" />
            </a>
            <a href="https://www.instagram.com/ediaput411/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="w-8 h-8" />
            </a>
            <a href="https://wa.me/6289671577111" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" className="w-8 h-8" />
            </a>
            <a href="mailto:ediaput200@gmail.com">
              <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      <section id="marketplace" className="py-16 bg-white px-4" data-aos="fade-up-right">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-2xl sm:text-3xl font-bold mb-6">Tempat Kami Berjualan</h2>
    <p className="text-gray-600 mb-10 text-sm sm:text-base">
      Anda dapat membeli produk kami secara online melalui platform berikut:
    </p>

    <div className="flex flex-wrap justify-center gap-6">
      <a href="https://www.tokopedia.com/edsparepartstore" target="_blank" rel="noopener noreferrer">
        <div className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded-lg">
          <img
            src="images/tokopedia.png"
            alt="Tokopedia"
            className="w-15 h-15"
          />
        </div>
      </a>
      <a href="https://www.shopee.co.id/edsparepartstore" target="_blank" rel="noopener noreferrer">
      <div className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded-lg">
  <img
    src="images/shopee.png"
    alt="Shopee"
    className="w-17 h-17"
  />
</div>

      </a>
    </div>
  </div>
</section>



<a
  href="https://wa.me/6289671577111"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-bounce"
  title="Hubungi via WhatsApp"
>
  <img
    src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
    alt="WhatsApp"
    className="w-6 h-6"
  />
  <span className="hidden sm:inline text-xs font-medium">Chat Sekarang</span>
</a>






      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10 px-4" data-aos="fade-up" data-aos-delay="200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">EdServisStore</h3>
            <p className="text-sm text-gray-300">
              Spesialis servis gadget cepat dan terpercaya. Kami hadir untuk menyelesaikan semua masalah HP dan laptop Anda.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Navigasi</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#layanan" className="hover:text-white">Layanan</a></li>
              <li><a href="#keunggulan" className="hover:text-white">Kenapa Kami</a></li>
              <li><a href="#kontak" className="hover:text-white">Kontak</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Kontak Kami</h4>
            <p className="text-sm text-gray-300">0881-0372-43330</p>
            <p className="text-sm text-gray-300">ediaput200@gmail.com</p>
            <p className="text-sm text-gray-300">Lingkungan Kebon Sari Gang 4 No.25A</p>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 mt-8 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} EdiNarendra. All rights reserved.
        </div>
      </footer>

    </main>
  );
}
