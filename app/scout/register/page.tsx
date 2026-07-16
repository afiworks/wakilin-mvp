export default function ScoutRegisterPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="text-4xl font-bold">
        Daftar Menjadi Scout
      </h1>

      <p className="mt-4 text-gray-600">
        Bergabung sebagai Scout dan bantu customer melakukan survei lokasi.
      </p>

      <div className="mt-8 space-y-4">
        <div>
          <label className="mb-2 block font-medium">
            Nama Lengkap
          </label>

          <input
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
            placeholder="Nama lengkap"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Email
          </label>

          <input
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
            placeholder="nama@email.com"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Nomor WhatsApp
          </label>

          <input
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
            placeholder="08xxxxxxxxxx"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Kota Domisili
          </label>

          <input
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
            placeholder="Kota"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Pengalaman
          </label>

          <textarea
            rows={5}
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
            placeholder="Ceritakan pengalaman survei atau pekerjaan lapangan..."
          />
        </div>

        <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white">
          Daftar Menjadi Scout
        </button>
      </div>
    </main>
  );
}