export default function WhyUs() {
    return (
      <section id="kenapa" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Kenapa Pilih Kami?</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Feature icon="⚡" title="Cepat & Tepat" desc="Pengerjaan cepat dan hasil akurat." />
            <Feature icon="💰" title="Harga Terjangkau" desc="Biaya servis yang transparan dan ramah di kantong." />
            <Feature icon="🛡️" title="Garansi" desc="Garansi servis untuk kenyamanan Anda." />
          </div>
        </div>
      </section>
    );
  }
  
  function Feature({ icon, title, desc }) {
    return (
      <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
        <div className="text-4xl mb-4">{icon}</div>
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
    );
  }
  