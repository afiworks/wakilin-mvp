export default function HowItWorks() {
  return (
    <section className="mx-auto mt-20 max-w-5xl px-6">
      <h2 className="text-center text-3xl font-bold">
        Cara Kerja Wakilin
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold">
            1️⃣ Buat Task
          </h3>

          <p className="mt-3 text-gray-600">
            Jelaskan kebutuhan survei atau pengecekan lokasi yang ingin
            dilakukan.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold">
            2️⃣ Scout Ambil Task
          </h3>

          <p className="mt-3 text-gray-600">
            Scout di kota tujuan mengambil dan menjalankan task yang tersedia.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold">
            3️⃣ Terima Laporan
          </h3>

          <p className="mt-3 text-gray-600">
            Dapatkan hasil survei lengkap tanpa harus datang langsung ke lokasi.
          </p>
        </div>
      </div>
    </section>
  );
}
