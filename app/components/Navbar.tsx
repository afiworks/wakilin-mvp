import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute left-0 right-0 top-0 flex items-center justify-between p-6">
      <h2 className="text-xl font-bold">Project Atlas</h2>

      <button className="rounded-xl border border-gray-300 px-4 py-2 font-medium transition hover:bg-gray-100">
        Masuk
      </button>
    </nav>
  );
}