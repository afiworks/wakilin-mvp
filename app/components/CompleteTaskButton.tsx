"use client";

import { useRouter } from "next/navigation";

export default function CompleteTaskButton({
  taskId,
}: {
  taskId: number;
}) {
  const router = useRouter();

  async function handleCompleteTask() {
    const response = await fetch(`/api/tasks/${taskId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "COMPLETED",
      }),
    });

    if (!response.ok) {
      alert("Gagal menyelesaikan task");
      return;
    }

    alert("Task berhasil diselesaikan!");

    router.refresh();
  }

  return (
    <button
      onClick={handleCompleteTask}
      className="mt-8 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
    >
      Selesaikan Task
    </button>
  );
}