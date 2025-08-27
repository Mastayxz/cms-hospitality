"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import Link from "next/link";

export default function AdminPage() {
  const modules = [
    { title: "Hero", description: "Manage hero section" },
    { title: "Profile", description: "Manage profile section" },
    { title: "Rooms", description: "Manage rooms" },
    { title: "Facility", description: "Manage facility" },
    { title: "FaQ", description: "Manage faq" },
  ];

  return (
    <div className="min-h-screen  p-8">
      <h1 className="text-3xl font-bold mb-6">CMS Dashboard</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((m, i) => (
          <Link key={i} href={`/admin/${m.title.toLowerCase()}`}>
            <Card onClick={() => {}}>
              <CardHeader>
                <CardTitle>{m.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{m.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
