export default function Contact() {
    return (
      <section id="kontak" className="py-16 bg-blue-700 text-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h3 className="text-3xl font-bold mb-4">Butuh Bantuan?</h3>
          <p className="mb-6">Hubungi kami sekarang untuk konsultasi gratis!</p>
          <div className="space-y-2 text-sm">
            <p>📞 0812-3456-7890</p>
            <p>📧 edservicestore@gmail.com</p>
            <a href="https://wa.me/6281234567890" target="_blank" className="inline-block mt-4 bg-white text-blue-700 px-6 py-2 rounded hover:bg-gray-100 transition">
              Chat via WhatsApp
            </a>
          </div>
        </div>
      </section>
    );
  }
  