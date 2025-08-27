// app/page.tsx
import CheckAvailability from "./components/CheckAvailabilty";
import GallerySection from "./components/GalerySection";
import FaqSection from "./components/FaqSection";
import RoomsSection from "./components/RoomsSection";
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";
import FacilitySection from "./components/FacilitySection";

export default async function Home() {
  // Fetch data hero
  const heroRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/hero`, {
    cache: "no-store",
  });
  const hero = await heroRes.json();

  // Fetch data about/profile
  const aboutRes = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/profile`,
    {
      cache: "no-store",
    }
  );
  const about = await aboutRes.json();

  // Fetch data rooms
  const roomsRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/room`, {
    cache: "no-store",
  });
  const rooms = await roomsRes.json();

  const facilitiesRes = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/facility`,
    {
      cache: "no-store",
    }
  );
  const facilities = await facilitiesRes.json();

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title={hero?.title || "Diamond Luxury Hotel"}
        subtitle={
          hero?.subtitle ||
          "Welcome To The Place Where Luxury Meets Affordability"
        }
        backgroundImage={hero?.imageUrl || "/hero.png"}
      />

      {/* Spacer */}
      <div className="p-6 relative -top-24">
        <CheckAvailability />
      </div>

      {/* About Section */}
      <AboutSection
        description={about?.description || "Welcome to our luxurious hotel..."}
        image1={about?.image1Url || "/about1.png"}
        image2={about?.image2Url || "/about2.png"}
      />

      {/* Product / promo section */}
      <ProductSection />

      {/* Rooms Section */}
      <RoomsSection rooms={rooms} />

      {/* Facility Section */}
      <FacilitySection />

      {/* Gallery Section */}
      <GallerySection facilities={facilities} />

      {/* FAQs */}
      <FaqSection />
    </div>
  );
}
