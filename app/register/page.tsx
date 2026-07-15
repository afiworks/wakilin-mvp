import Link from "next/link";
export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold">
          Daftar sebagai Scout
        </h1>

        <p className="mt-2 text-gray-600">
          Bergabung dan mulai mengerjakan task di Wakilin.
        </p>

        <div className="mt-6">
          <label className="mb-2 block font-medium">
            Nama Lengkap
          </label>

          <input
            type="text"
            placeholder="Nama lengkap"
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
          />
        </div>

        <div className="mt-4">
          <label className="mb-2 block font-medium">
            Email
          </label>

          <input
            type="email"
            placeholder="nama@email.com"
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
          />
        </div>

        <div className="mt-4">
          <label className="mb-2 block font-medium">
            Password
          </label>

          <input
            type="password"
            placeholder="••••••••"
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
          />
        </div>

        <button className="mt-6 w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
  Daftar
</button>

<p className="mt-4 text-center text-sm text-gray-500">
  Sudah punya akun?
</p>

<p className="mt-2 text-center text-sm text-blue-600">
  Masuk di sini
</p>
      </div>
    </main>
  );
}