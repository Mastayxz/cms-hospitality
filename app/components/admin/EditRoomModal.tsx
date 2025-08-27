"use client";
import { useState, ChangeEvent, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";

interface RoomImage {
  id: number;
  url: string;
}

interface Room {
  id: number;
  name: string;
  price: number;
  description: string;
  images: RoomImage[];
}
interface EditRoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  room: Room | null;
  onUpdated: () => void;
}

export default function EditRoomModal({
  isOpen,
  onClose,
  room,
  onUpdated,
}: EditRoomModalProps) {
  const [name, setName] = useState(room?.name || "");
  const [price, setPrice] = useState(room?.price || 0);
  const [description, setDescription] = useState(room?.description || "");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (room) {
      setName(room.name || "");
      setPrice(room.price || 0);
      setDescription(room.description || "");
      setPreviewUrl(room.images?.[0]?.url || null); // gambar lama
    }
  }, [room]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
      setPreviewUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    let newImageUrl = previewUrl;

    // kalau user upload gambar baru
    if (imageFile) {
      const fileName = `${Date.now()}-${imageFile.name}`;
      const { error } = await supabase.storage
        .from("rooms")
        .upload(fileName, imageFile);
      if (error) {
        console.error(error);
        return;
      }

      newImageUrl = supabase.storage.from("rooms").getPublicUrl(fileName)
        .data.publicUrl;

      // update / replace RoomImage lama
      await fetch("/api/room-image", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          roomId: room?.id,
          url: newImageUrl,
        }),
      });
    }

    // update data room
    await fetch("/api/room", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: room?.id, name, price, description }),
    });

    onUpdated();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Edit Room</h2>
        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              value={name ?? ""}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded p-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Price</label>
            <input
              type="number"
              value={price ?? 0}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full border rounded p-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              value={description ?? ""}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded p-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Image</label>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {previewUrl && (
              <div className="mt-2 relative w-full aspect-[4/3]">
                <Image
                  src={previewUrl}
                  alt="Preview"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            )}
          </div>
          <div className="flex justify-end space-x-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded-full hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
