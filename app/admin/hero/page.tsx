"use client";

import { useState, ChangeEvent, useEffect } from "react";
import HeroSection from "@/app/components/HeroSection";
import { supabase } from "@/lib/supabaseClient";

export default function AdminHeroPage() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [dbImageUrl, setDbImageUrl] = useState("");
  // dari DB
  useEffect(() => {
    const fetchHero = async () => {
      const res = await fetch("/api/hero");
      if (res.ok) {
        const data = await res.json();
        if (data) {
          setTitle(data.title || "");
          setSubtitle(data.subtitle || "");
          setDbImageUrl(data.imageUrl || "");
          setImageUrl(data.imageUrl || "");
        }
      }
    };
    fetchHero();
  }, []);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
      setImageUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !imageFile) return alert("Title & image required");

    // Upload ke Supabase Storage (pakai nama fix hero.png)
    const { error } = await supabase.storage
      .from("hero")
      .upload("hero.png", imageFile, { upsert: true });

    if (error) return alert("Upload error: " + error.message);

    // Ambil public URL + cache busting
    const { data } = supabase.storage.from("hero").getPublicUrl("hero.png");
    const publicUrl = `${data.publicUrl}?t=${Date.now()}`;

    // Simpan ke DB via API Route
    const res = await fetch("/api/hero", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, subtitle, imageUrl: publicUrl }),
    });

    const result = await res.json();
    if (res.ok) {
      alert("Hero saved!");
      setDbImageUrl(publicUrl); // update state biar preview langsung ganti
      setImageFile(null);
    } else {
      alert("Error: " + result.error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 space-y-8">
      <h1 className="text-3xl font-bold text-center">Edit Hero Section</h1>

      <div className="space-y-4 px-4 py-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Edit Hero Section</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block font-medium mb-1">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border rounded p-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Subtitle</label>
              <input
                type="text"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                className="w-full border rounded p-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Hero Image</label>
              <input type="file" accept="image/*" onChange={handleFileChange} />
            </div>
          </div>

          <div className="mt-4 text-right">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>

      {(imageUrl || dbImageUrl) && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Preview</h2>
          <HeroSection
            title={title}
            subtitle={subtitle}
            backgroundImage={imageUrl || dbImageUrl}
            height="h-[400px]"
          />
        </div>
      )}
    </div>
  );
}
