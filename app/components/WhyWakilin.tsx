export default function WhyWakilin() {
  return (
    <section className="mx-auto mt-20 max-w-5xl px-6">
      <h2 className="text-center text-3xl font-bold">
        Mengapa Wakilin?
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold">
            ✅ Hemat Waktu dan Hemat Biaya
          </h3>

          <p className="mt-3 text-gray-600">
            Tidak perlu datang langsung ke lokasi untuk melakukan survei.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold">
            ✅ Scout Lokal
          </h3>

          <p className="mt-3 text-gray-600">
            Dibantu oleh Scout yang berada di kota tujuan.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold">
            ✅ Laporan Lengkap
          </h3>

          <p className="mt-3 text-gray-600">
            Dapatkan hasil survei yang detail dan mudah dipahami.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold">
            ✅ Lebih Cepat
          </h3>

          <p className="mt-3 text-gray-600">
            Ambil keputusan tanpa harus menunggu kunjungan langsung.
          </p>
        </div>
      </div>
    </section>
  );
}