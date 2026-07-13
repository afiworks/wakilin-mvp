"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ReportForm({
  taskId,
}: {
  taskId: number;
}) {
  const [report, setReport] = useState("");
  const router = useRouter();

  async function handleSubmit() {
    const response = await fetch(`/api/tasks/${taskId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        report,
      }),
    });

    if (!response.ok) {
      alert("Gagal menyimpan laporan");
      return;
    }

    alert("Laporan berhasil disimpan!");
    router.refresh();
  }

  return (
    <div className="mt-8 rounded-2xl border border-gray-200 p-6">
      <h2 className="text-xl font-semibold">
        Isi Laporan Scout
      </h2>

      <textarea
        value={report}
        onChange={(e) => setReport(e.target.value)}
        rows={6}
        placeholder="Tuliskan hasil survei..."
        className="mt-4 w-full rounded-xl border border-gray-300 px-4 py-3"
      />

      <button
        onClick={handleSubmit}
        className="mt-4 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white"
      >
        Simpan Laporan
      </button>
    </div>
  );
}
