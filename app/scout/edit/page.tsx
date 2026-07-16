"use client";
import { useState } from "react";
export default function EditScoutPage() {
    const [name, setName] = useState("");
const [city, setCity] = useState("");
const [bio, setBio] = useState("");
async function handleSaveProfile() {
  const response = await fetch("/api/scout-profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      city,
      bio,
    }),
  });

  if (!response.ok) {
    alert("Gagal menyimpan profil");
    return;
  }

  alert("Profil berhasil disimpan!");
}
  return (
    <main className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="text-4xl font-bold">
        Edit Profil Scout
      </h1>

      <div className="mt-8 space-y-4">
        <div>
          <label className="mb-2 block font-medium">
            Nama
          </label>

          <input
          value={name}
onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
            placeholder="Nama Scout"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Kota
          </label>

          <input
          value={city}
onChange={(e) => setCity(e.target.value)}

            className="w-full rounded-xl border border-gray-300 px-4 py-3"
            placeholder="Kota"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Bio
          </label>

          <textarea
          value={bio}
onChange={(e) => setBio(e.target.value)}
            rows={5}
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
            placeholder="Ceritakan tentang dirimu..."
          />
        </div>

        <button onClick={handleSaveProfile} className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white">
          Simpan Profil
        </button>
      </div>
    </main>
  );
}