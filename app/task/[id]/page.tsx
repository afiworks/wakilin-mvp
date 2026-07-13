import TakeTaskButton from "@/app/components/TakeTaskButton";
import { prisma } from "@/app/lib/prisma";

export default async function TaskDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const task = await prisma.task.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!task) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-3xl font-bold">Task tidak ditemukan</h1>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold">{task.title}</h1>

      <p className="mt-3 text-blue-600 font-medium">
        📍 {task.city}
      </p>
      <p className="mt-3">
  <span
    className={`rounded-full px-3 py-1 text-sm font-medium ${
      task.status === "OPEN"
        ? "bg-blue-100 text-blue-700"
        : "bg-green-100 text-green-700"
    }`}
  >
    {task.status}
  </span>
</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
          💰 Rp {task.budget.toLocaleString("id-ID")}
        </span>

        <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-700">
          📅 {new Date(task.deadline).toLocaleDateString("id-ID")}
        </span>
      </div>

      <div className="mt-8 rounded-2xl border border-gray-200 p-6">
        <h2 className="text-xl font-semibold">
          Catatan untuk Scout
        </h2>

        <p className="mt-3 text-gray-600">
          {task.notes}
        </p>
      </div>
      {task.status === "OPEN" ? (
  <TakeTaskButton taskId={task.id} />
) : (
  <p className="mt-8 font-semibold text-green-600">
    ✅ Task sudah diambil
  </p>
)}
    </main>
  );
}