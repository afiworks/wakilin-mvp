"use client";

import { useRouter } from "next/navigation";

export default function RatingButton({
  taskId,
  rating,
}: {
  taskId: number;
  rating: number;
}) {
  const router = useRouter();

  async function handleRating() {
    const response = await fetch(`/api/tasks/${taskId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rating,
      }),
    });

    if (!response.ok) {
      alert("Gagal menyimpan rating");
      return;
    }

    alert("Rating berhasil disimpan!");

    router.refresh();
  }

  return (
    <button
      onClick={handleRating}
      className="rounded-lg bg-yellow-100 px-3 py-2"
    >
      ⭐ {rating}
    </button>
  );
}