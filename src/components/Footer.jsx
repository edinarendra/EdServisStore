"use client";

import { Facebook, Instagram, Phone, Mail, MapPin, ShoppingBag } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* ========== BRAND ========== */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">EdServisStore</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Servis HP & Laptop Cepat, Aman, dan Bergaransi. 
            Kami berkomitmen memberikan pelayanan terbaik untuk kebutuhan gadget Anda.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com/edi.aput.2025/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/ediaput411/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://wa.me/6289671577111"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>

        {/* ========== LAYANAN ========== */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Layanan Kami</h3>
          <ul className="space-y-2 text-sm">
            <li>✅ Servis HP & Laptop</li>
            <li>✅ Penggantian Sparepart</li>
            <li>✅ Upgrade Hardware</li>
            <li>✅ Penjualan Aksesoris</li>
          </ul>
        </div>

        {/* ========== KONTAK ========== */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Hubungi Kami</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="text-yellow-400 mt-0.5" />
              <span>Lingkungan Kebon Sari Gang 4 No 25A, Kampung Baru, Singaraja, Bali</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-yellow-400" />
              <a
                href="https://wa.me/6289671577111"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400"
              >
                +62 896-7157-7111
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-yellow-400" />
              <a
                href="mailto:ediaput200@gmail.com"
                className="hover:text-yellow-400"
              >
                ediaput200@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* ========== MARKETPLACE ========== */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Marketplace</h3>
          <div className="flex flex-col space-y-3 text-sm">
            <a
              href="https://www.tokopedia.com/edsparepartstore"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
            >
              <ShoppingBag size={18} className="text-yellow-400" />
              Tokopedia
            </a>
            <a
              href="https://www.shopee.co.id/edsparepartstore"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
            >
              <ShoppingBag size={18} className="text-yellow-400" />
              Shopee
            </a>
          </div>
        </div>
      </div>

      {/* ========== COPYRIGHT LINE ========== */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} <span className="text-yellow-400 font-semibold">EdServisStore</span>. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Dibuat dengan ❤️ oleh <span className="text-blue-400">EdServis Developer</span>
        </p>
      </div>
    </footer>
  );
}
