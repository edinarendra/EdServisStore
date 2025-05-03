export default function Services() {
  return (
    <section id="layanan" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">Layanan Kami</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Servis HP"
            desc="Ganti layar, baterai, port charger, dan perbaikan software."
          />
          <ServiceCard
            title="Servis Laptop"
            desc="Instal ulang, upgrade SSD/RAM, bersihkan kipas & thermal paste."
          />
          <ServiceCard
            title="Diagnosa Gratis"
            desc="Cek kerusakan gadget Anda tanpa biaya apapun."
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, desc }) {
  return (
    <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}
