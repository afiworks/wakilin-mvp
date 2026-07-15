import { prisma } from "@/app/lib/prisma";

export default async function ScoutPage() {
  const tasks = await prisma.task.findMany();

  const openCount = tasks.filter(
    (task) => task.status === "OPEN"
  ).length;

  const takenCount = tasks.filter(
    (task) => task.status === "TAKEN"
  ).length;

  const completedCount = tasks.filter(
    (task) => task.status === "COMPLETED"
  ).length;

  const ratings = tasks
    .map((task) => task.rating)
    .filter((rating): rating is number => rating !== null);

  const averageRating =
    ratings.length === 0
      ? 0
      : (
          ratings.reduce((a, b) => a + b, 0) /
          ratings.length
        ).toFixed(1);

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-4xl font-bold">
        Dashboard Scout
      </h1>

      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="rounded-2xl bg-blue-100 p-6">
          <p className="text-sm text-blue-700">OPEN</p>
          <p className="text-3xl font-bold text-blue-700">
            {openCount}
          </p>
        </div>

        <div className="rounded-2xl bg-yellow-100 p-6">
          <p className="text-sm text-yellow-700">TAKEN</p>
          <p className="text-3xl font-bold text-yellow-700">
            {takenCount}
          </p>
        </div>

        <div className="rounded-2xl bg-green-100 p-6">
          <p className="text-sm text-green-700">COMPLETED</p>
          <p className="text-3xl font-bold text-green-700">
            {completedCount}
          </p>
        </div>

        <div className="rounded-2xl bg-purple-100 p-6">
          <p className="text-sm text-purple-700">RATING</p>
          <p className="text-3xl font-bold text-purple-700">
            ⭐ {averageRating}
          </p>
        </div>
      </div>
    </main>
  );
}