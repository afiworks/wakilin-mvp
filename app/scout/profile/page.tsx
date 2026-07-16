import { prisma } from "@/app/lib/prisma";

export default async function ScoutProfilePage() {
  const completedTasks = await prisma.task.findMany({
  where: {
    status: "COMPLETED",
  },
  orderBy: {
    createdAt: "desc",
  },
});
const scout = await prisma.scoutProfile.findFirst();
console.log("SCOUT DATA:", scout);
const ratings = completedTasks
  .map((task) => task.rating)
  .filter((rating): rating is number => rating !== null);

const averageRating =
  ratings.length === 0
    ? 0
    : (
        ratings.reduce((a, b) => a + b, 0) /
        ratings.length
      ).toFixed(1);
      const totalReports = completedTasks.filter(
  (task) => task.report
).length;
const totalRatedTasks = completedTasks.filter(
  (task) => task.rating
).length;
let achievement = "🌱 Scout Baru";

if (completedTasks.length >= 10) {
  achievement = "🥇 Top Scout";
} else if (completedTasks.length >= 5) {
  achievement = "🥈 Scout Berpengalaman";
} else if (completedTasks.length >= 1) {
  achievement = "🥉 Scout Aktif";
}
const nextTarget =
  completedTasks.length >= 10
    ? "Level tertinggi tercapai"
    : completedTasks.length >= 5
    ? `${10 - completedTasks.length} task lagi menuju Top Scout`
    : `${5 - completedTasks.length} task lagi menuju Scout Berpengalaman`;
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <div className="rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="text-4xl font-bold">
          Profil Scout
        </h1>
        
        <div className="mt-6 flex justify-center">
  <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gray-200 text-4xl">
    👤
  </div>
</div>
<div className="mt-4 text-center">
  <button className="rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
    Upload Foto
  </button>
</div>

        <p className="mt-4 text-gray-600">
          Profil Scout dan portofolio pekerjaan yang telah diselesaikan.
        </p>

        <div className="mt-8 space-y-2">
          <p>
  <strong>Nama:</strong> {scout?.name || "Scout Wakilin"}
</p>

          <p>
            <strong>Kota:</strong> Tangerang
          </p>

          <p>
            <strong>Spesialisasi:</strong> Survei Kos & Properti
          </p>

          <p>
            <strong>Rating:</strong> ⭐ {averageRating}

          </p>

          <p>
            <strong>Task Selesai:</strong> {completedTasks.length}
          </p>
          <p>
  <strong>Laporan Terkirim:</strong> {totalReports}
</p>
<p>
  <strong>Task Dinilai:</strong> {totalRatedTasks}
</p>
<div className="mt-4 flex flex-wrap gap-2">
  <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-700">
    ⭐ Rated Scout
  </span>

  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
    ✅ Active Scout
  </span>

  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
    🏆 Trusted Scout
  </span>
</div>
<div className="mt-4 rounded-xl bg-yellow-50 p-4">
  <p className="font-semibold">
    Achievement
  </p>

  <p className="mt-2 text-lg">
    {achievement}
  </p>
  <p className="mt-2 text-sm text-gray-600">
  {nextTarget}
</p>
</div>
        </div>

        <div className="mt-6 rounded-xl bg-gray-50 p-4">
          <h2 className="text-xl font-semibold">
            Tentang Saya
          </h2>

          <p className="mt-2 text-gray-600">
            Saya siap membantu survei lokasi, pengecekan kos,
            inspeksi rumah, dan berbagai kebutuhan lapangan lainnya.
          </p>
        </div>

        <div className="mt-6 rounded-xl bg-gray-50 p-4">
          <h2 className="text-xl font-semibold">
  Task Terbaru Scout
</h2>

          <div className="mt-4 space-y-3">
            {completedTasks.length === 0 ? (
              <p className="text-gray-600">
                Belum ada task yang selesai.
              </p>
            ) : (
              completedTasks.map((task) => (
                <div
                  key={task.id}
                  className="rounded-lg border border-gray-200 bg-white p-3"
                >
                  <h3 className="font-semibold">
                    {task.title}
                  </h3>

                  <p className="text-sm text-gray-600">
                    📍 {task.city}
                  </p>

                  <p className="mt-2 text-sm text-gray-600">
                    {task.report || "Belum ada laporan"}
                  </p>

                  <p className="mt-2 text-sm font-medium text-yellow-600">
                    {task.rating
                      ? `⭐ ${task.rating}/5`
                      : "Belum ada rating"}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  );
}