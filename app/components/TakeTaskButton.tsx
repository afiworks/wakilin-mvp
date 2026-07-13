"use client";

import { useRouter } from "next/navigation";

export default function TakeTaskButton({
  taskId,
}: {
  taskId: number;
}) {
  const router = useRouter();

  async function handleTakeTask() {
    const response = await fetch(`/api/tasks/${taskId}`, {
      method: "PATCH",
    });

    if (!response.ok) {
      alert("Gagal mengambil task");
      return;
    }

    alert("Task berhasil diambil!");

    router.refresh();
  }

  return (
    <button
      onClick={handleTakeTask}
      className="mt-8 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
    >
      Ambil Task
    </button>
  );
}