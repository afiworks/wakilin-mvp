import Link from "next/link";
import { prisma } from "@/app/lib/prisma";

export default async function TaskListPage() {
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  const openCount = tasks.filter(
  (task) => task.status === "OPEN"
).length;

const takenCount = tasks.filter(
  (task) => task.status === "TAKEN"
).length;

const completedCount = tasks.filter(
  (task) => task.status === "COMPLETED"
).length;
const totalTasks = tasks.length;
const completionRate =
  totalTasks === 0
    ? 0
    : Math.round(
        (completedCount / totalTasks) * 100
      );

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-4xl font-bold">Daftar Task</h1>
<div className="mt-6 grid grid-cols-3 gap-4">
  <div className="rounded-xl bg-blue-100 p-4 text-center">
    <p className="text-sm text-blue-700">OPEN</p>
    <p className="text-2xl font-bold text-blue-700">
      {openCount}
    </p>
  </div>

  <div className="rounded-xl bg-yellow-100 p-4 text-center">
    <p className="text-sm text-yellow-700">TAKEN</p>
    <p className="text-2xl font-bold text-yellow-700">
      {takenCount}
    </p>
  </div>

  <div className="rounded-xl bg-green-100 p-4 text-center">
    <p className="text-sm text-green-700">COMPLETED</p>
    <p className="text-2xl font-bold text-green-700">
      {completedCount}
    </p>
  </div>
  <div className="rounded-xl bg-purple-100 p-4 text-center">
  <p className="text-sm text-purple-700">
    TOTAL
  </p>

  <p className="text-2xl font-bold text-purple-700">
    {totalTasks}
  </p>
</div>
<div className="mt-6 rounded-xl border border-gray-200 p-4">
  <p className="font-medium">
    Completion Rate
  </p>

  <p className="mt-2 text-2xl font-bold">
    {completionRate}%
  </p>
</div>
</div>
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
  : task.status === "TAKEN"
  ? "bg-yellow-100 text-yellow-700"
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