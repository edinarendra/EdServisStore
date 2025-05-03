import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-700 text-white py-4 shadow">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">EdServiceStore</h1>
        <nav className="space-x-6 text-sm font-medium">
          <Link href="#layanan" className="hover:underline">Layanan</Link>
          <Link href="#kenapa" className="hover:underline">Kenapa Kami</Link>
          <Link href="#kontak" className="hover:underline">Kontak</Link>
        </nav>
      </div>
    </header>
  );
}
