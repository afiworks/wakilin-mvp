import { prisma } from "@/app/lib/prisma";

export default async function CompletedTasksPage() {
  const tasks = await prisma.task.findMany({
    where: {
      status: "COMPLETED",
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-4xl font-bold">
        Riwayat Task Selesai
      </h1>

      <p className="mt-2 text-gray-600">
        Semua task yang telah selesai dikerjakan Scout.
      </p>

      <div className="mt-8 space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-2xl font-bold">
              {task.title}
            </h2>

            <p className="mt-2 text-blue-600">
              📍 {task.city}
            </p>

            <p className="mt-4 text-gray-600">
              {task.report || "Belum ada laporan."}
            </p>

            <p className="mt-4 font-semibold text-yellow-600">
              {task.rating
                ? `⭐ ${task.rating}/5`
                : "Belum ada rating"}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}