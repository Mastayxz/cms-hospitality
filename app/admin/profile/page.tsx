"use client";
import { useState, useEffect, ChangeEvent } from "react";
import { supabase } from "@/lib/supabaseClient";
import AboutSection from "@/app/components/AboutSection";

export default function AdminAboutPage() {
  const [description, setDescription] = useState("");
  const [image1File, setImage1File] = useState<File | null>(null);
  const [image2File, setImage2File] = useState<File | null>(null);
  const [image1Url, setImage1Url] = useState("");
  const [image2Url, setImage2Url] = useState("");

  // ambil data awal dari DB
  useEffect(() => {
    async function fetchProfile() {
      const res = await fetch("/api/profile");
      if (res.ok) {
        const data = await res.json();
        if (data) {
          setDescription(data.description || "");
          setImage1Url(data.image1Url || "");
          setImage2Url(data.image2Url || "");
        }
      }
    }
    fetchProfile();
  }, []);

  // handler upload file
  const handleFile1 = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage1File(e.target.files[0]);
      setImage1Url(URL.createObjectURL(e.target.files[0])); // preview sementara
    }
  };
  const handleFile2 = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage2File(e.target.files[0]);
      setImage2Url(URL.createObjectURL(e.target.files[0]));
    }
  };

  // submit ke Supabase + API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let uploadedImage1 = image1Url;
    let uploadedImage2 = image2Url;

    if (image1File) {
      const { error } = await supabase.storage
        .from("profile")
        .upload("about1.png", image1File, { upsert: true });
      if (error) return alert("Upload error (image1): " + error.message);
      uploadedImage1 = supabase.storage
        .from("profile")
        .getPublicUrl("about1.png").data.publicUrl;
    }

    if (image2File) {
      const { error } = await supabase.storage
        .from("profile")
        .upload("about2.png", image2File, { upsert: true });
      if (error) return alert("Upload error (image2): " + error.message);
      uploadedImage2 = supabase.storage
        .from("profile")
        .getPublicUrl("about2.png").data.publicUrl;
    }

    const res = await fetch("/api/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        description,
        image1Url: uploadedImage1,
        image2Url: uploadedImage2,
      }),
    });

    if (res.ok) alert("About section saved!");
    else {
      const err = await res.json();
      alert("Error: " + err.error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 space-y-8">
      <h1 className="text-3xl font-bold text-center">Edit About Section</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded p-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
            rows={5}
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Image 1</label>
          <input type="file" accept="image/*" onChange={handleFile1} />
        </div>

        <div>
          <label className="block font-medium mb-1">Image 2</label>
          <input type="file" accept="image/*" onChange={handleFile2} />
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </form>

      {/* Preview pakai AboutSection */}
      {(description || image1Url || image2Url) && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">Preview</h2>
          <AboutSection
            description={description}
            image1={image1Url}
            image2={image2Url}
          />
        </div>
      )}
    </div>
  );
}
