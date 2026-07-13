"use client";

import { useState } from "react";

export default function TaskPage() {
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [budget, setBudget] = useState("");
  const [deadline, setDeadline] = useState("");
  const [notes, setNotes] = useState("");

  async function handleSubmit() {
    try {
      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          city,
          address,
          budget,
          deadline,
          notes,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();

        console.error(errorText);
        alert("Gagal menyimpan task");

        return;
      }

      const data = await response.json();

      setTitle("");
      setCity("");
      setAddress("");
      setBudget("");
      setDeadline("");
      setNotes("");

      alert("Task berhasil dipublikasikan!");

      console.log(data);
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat menyimpan task");
    }
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col px-6 py-12">
      <h1 className="text-4xl font-bold">Buat Task</h1>

      <p className="mt-3 text-gray-600">
        Isi informasi di bawah ini agar Scout dapat memahami kebutuhanmu.
      </p>

      <div className="mt-8">
        <label className="mb-2 block font-medium">
          Nama Tempat / Kos
        </label>

        <input
          type="text"
          placeholder="Contoh: Kos Putri Melati"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
        />
      </div>

      <div className="mt-6">
        <label className="mb-2 block font-medium">
          Kota
        </label>

        <input
          type="text"
          placeholder="Contoh: Yogyakarta"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
        />
      </div>

      <div className="mt-6">
        <label className="mb-2 block font-medium">
          Alamat Lengkap
        </label>

        <textarea
          placeholder="Masukkan alamat lengkap lokasi"
          rows={4}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
        />
      </div>

      <div className="mt-6">
        <label className="mb-2 block font-medium">
          Budget (Rp)
        </label>

        <input
          type="number"
          placeholder="Contoh: 75000"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
        />
      </div>

      <div className="mt-6">
        <label className="mb-2 block font-medium">
          Deadline
        </label>

        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
        />
      </div>

      <div className="mt-6">
        <label className="mb-2 block font-medium">
          Catatan untuk Scout
        </label>

        <textarea
          placeholder="Contoh: Tolong cek kebersihan kamar, kondisi kamar mandi, sinyal internet, dan apakah area parkir cukup luas."
          rows={5}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="mt-8 w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Publikasikan Task
      </button>
    </main>
  );
}