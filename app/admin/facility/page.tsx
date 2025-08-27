"use client";
import { useState, useEffect, ChangeEvent } from "react";
import { supabase } from "@/lib/supabaseClient";
import { motion } from "framer-motion";
import Image from "next/image";
// import EditRoomModal from "@/app/components/admin/EditRoomModal";
// import RoomsSection from "@/app/components/RoomsSection";

// 1. Definisikan tipe Facility & RoomImage
interface FacilityImage {
  id: number;
  url: string;
}

interface Facility {
  id: number;
  name: string;
  description: string;
  images: FacilityImage[];
}

export default function FacilityForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  // 2. State pakai type Facility
  const [facilities, seetFacilities] = useState<Facility[]>([]);

  // Fetch facilities dari DB
  const fetchFacilities = async () => {
    try {
      const res = await fetch("/api/facility");
      if (res.ok) {
        const data: Facility[] = await res.json(); // ✅ type hasil fetch
        seetFacilities(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchFacilities();
  }, []);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setImages(filesArray);
      setPreviewUrls(filesArray.map((file) => URL.createObjectURL(file)));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || images.length === 0) return alert("All fields required");

    // Insert Facility
    const facilityRes = await fetch("/api/facility", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description }),
    });
    const facilityData = await facilityRes.json();
    const facilityId = facilityData.id;

    // Upload images
    for (const img of images) {
      const fileName = `${Date.now()}-${img.name}`;
      const { error } = await supabase.storage
        .from("facilities")
        .upload(fileName, img);
      if (error) console.error("Upload error:", error);

      const publicUrl = supabase.storage
        .from("facilities")
        .getPublicUrl(fileName).data.publicUrl;

      // Save to FacilityImage
      await fetch("/api/facility-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ facilityId, url: publicUrl }), // ✅ ganti facilityId
      });
    }

    alert("Facility saved!");
    setName("");
    setDescription("");
    setImages([]);
    setPreviewUrls([]);

    fetchFacilities(); // refresh daftar kamar
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure to delete this facility?")) return;
    await fetch("/api/facility", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchFacilities();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 space-y-8">
      <h1 className="text-3xl font-bold text-center">Create Facility</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-lg shadow-md"
      >
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded p-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded p-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Images</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              multiple
            />
          </div>
        </div>
        {previewUrls.length > 0 && (
          <div className="grid grid-cols-3 gap-2 mt-4">
            {previewUrls.map((url) => (
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                key={url}
                src={url}
                className="w-full h-24 object-cover rounded-lg"
              />
            ))}
          </div>
        )}
        <div className="mt-4 text-right">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Save
          </button>
        </div>
      </form>

      {/* facilities Section */}
      <div className="space-y-4">
        {facilities.map((facility) => (
          <div
            key={facility.id}
            className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-2"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="relative w-[60px] h-[60px] aspect-[1/1]">
                  {facility.images && facility.images.length > 0 ? (
                    <Image
                      src={facility.images[0].url}
                      alt={facility.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  ) : (
                    <div className="bg-gray-200 w-full h-full flex items-center justify-center rounded-full">
                      No Image
                    </div>
                  )}
                </div>
                <div className="ml-4">
                  <span className="block font-medium">{facility.name}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleDelete(facility.id)}
                  className="px-2 py-1 text-white bg-red-500 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
