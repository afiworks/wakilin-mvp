import Link from "next/link";
export default function Hero() {
  return (
    <>
      <h1 className="max-w-4xl text-center text-5xl font-bold leading-tight">
        Temukan Scout Terpercaya di Seluruh Indonesia
      </h1>

      <p className="mt-4 max-w-2xl text-center text-lg text-gray-600">
        Survei kos, cek rumah, inspeksi lokasi, dan berbagai tugas lapangan tanpa harus datang sendiri.
      </p>

      <div className="mt-6 flex gap-4">
    <Link
  href="/task"
  className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700"
>
  Buat Task
</Link>

        <button className="rounded-xl border border-gray-300 px-6 py-3 font-semibold transition hover:bg-gray-100">
          Jadi Scout
        </button>

        <a
  href="/task-list"
  className="rounded-xl border border-gray-300 px-6 py-3 font-semibold transition hover:bg-gray-100"
>
  Lihat Task
</a>
      </div>
    </>
  );
}