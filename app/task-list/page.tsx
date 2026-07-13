import Link from "next/link";
import { prisma } from "@/app/lib/prisma";

export default async function TaskListPage() {
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-4xl font-bold">Daftar Task</h1>

      <p className="mt-2 text-gray-600">
        Temukan task yang tersedia untuk dikerjakan Scout.
      </p>

      <div className="mt-8 space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <a
  href={`/task/${task.id}`}
  className="text-2xl font-bold text-blue-600 hover:underline"
>
  {task.title}
</a>

            <p className="mt-2 font-medium text-blue-600">
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
            

            <div className="mt-4 flex flex-wrap gap-3">
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                💰 Rp {task.budget.toLocaleString("id-ID")}
              </span>

              <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-700">
                📅{" "}
                {new Date(task.deadline).toLocaleDateString("id-ID")}
              </span>
            </div>

            <p className="mt-4 text-gray-600">
              {task.notes}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}