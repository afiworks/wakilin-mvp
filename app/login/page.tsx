export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold">
          Masuk ke Wakilin
        </h1>

        <p className="mt-2 text-gray-600">
          Kelola task dan laporan Scout dengan mudah.
        </p>

        <div className="mt-6">
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
          Masuk
        </button>

        <p className="mt-4 text-center text-sm text-gray-500">
Belum punya akun?
</p>
<a
  href="/register"
  className="mt-2 block text-center text-sm font-medium text-blue-600"
>
  Daftar sebagai Scout
</a>

      </div>
    </main>
  );
}