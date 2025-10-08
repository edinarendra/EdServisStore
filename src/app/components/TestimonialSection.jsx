"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Made Arya",
    message: "Pelayanan cepat dan hasil servis rapi banget. Laptop saya sekarang nyala tanpa masalah.",
    rating: 5,
    date: "2025-09-29",
  },
  {
    name: "Rini",
    message: "Sempat panik karena HP mati total, tapi di sini cuma butuh 1 hari langsung bisa. Terima kasih banyak!",
    rating: 5,
    date: "2025-09-26",
  },
  {
    name: "Rudi Santika",
    message: "Awalnya coba-coba, tapi hasilnya memuaskan. Sekarang jadi langganan kalau ada masalah gadget.",
    rating: 4,
    date: "2025-09-25",
  },
  {
    name: "Ni Komang Ayu",
    message: "Servis cepat, teknisi komunikatif, dan dijelaskan dengan bahasa yang mudah dimengerti.",
    rating: 5,
    date: "2025-09-23",
  },
  {
    name: "Budi Wirata",
    message: "Saya suka karena hasil servisnya rapi dan nggak asal-asalan. Worth it banget.",
    rating: 5,
    date: "2025-09-20",
  },
  {
    name: "Putu Lestari",
    message: "Harga servis sesuai kualitas. Nggak mahal tapi hasilnya bagus. Sukses terus EdServisStore!",
    rating: 5,
    date: "2025-09-19",
  },
  {
    name: "Ayu Dwi",
    message: "Kesan pertama: cepat, jujur, dan profesional. HP saya kembali normal tanpa drama.",
    rating: 5,
    date: "2025-09-16",
  },
  {
    name: "I Nyoman Sudi",
    message: "Tempatnya bersih dan pelayanannya ramah. Cocok banget untuk servis laptop mahasiswa.",
    rating: 4,
    date: "2025-09-14",
  },
  {
    name: "Teguh Pramana",
    message: "Awalnya laptop saya panas terus, setelah diperbaiki jadi adem lagi. Mantap pelayanannya.",
    rating: 5,
    date: "2025-09-12",
  },
  {
    name: "Desak Putri",
    message: "Senang banget bisa ketemu tempat servis kayak gini. Cepat, hasilnya bagus, dan bisa konsultasi gratis.",
    rating: 5,
    date: "2025-09-10",
  },
];

export default function TestimonialSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="testimoni"
      className="py-20 bg-gradient-to-br from-blue-50 to-white overflow-hidden"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800">
          Apa Kata <span className="text-blue-600">Pelanggan Kami?</span>
        </h2>

        <div className="overflow-x-auto flex gap-6 snap-x snap-mandatory scrollbar-hide py-4 px-2">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="snap-center min-w-[280px] sm:min-w-[320px] bg-white p-6 rounded-2xl shadow-md hover:shadow-lg flex-shrink-0 transition-all duration-300"
              data-aos="zoom-in"
            >
              <div className="flex justify-center mb-3">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">“{item.message}”</p>
              <h4 className="font-semibold text-blue-700">{item.name}</h4>
              <span className="text-xs text-gray-500">{item.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
