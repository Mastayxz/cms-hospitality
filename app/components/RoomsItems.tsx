// components/RoomsItem.tsx
import Image from "next/image";

interface RoomsItemProps {
  src: string;
  alt: string;
  price: string;
  title: string;
  className?: string; // biar bisa kasih grid span khusus
}

const RoomsItem = ({ src, alt, price, title, className }: RoomsItemProps) => {
  return (
    <div className={`relative ${className || ""}`}>
      <Image
        src={src}
        alt={alt}
        width={600}
        height={400}
        className="w-full h-full object-cover"
      />
      <span className="absolute top-0 bg-white bg-opacity-70 text-[#583101] px-3 py-2 text-sm md:text-base">
        {price}
      </span>
      <span className="absolute bottom-2 text-white px-3 py-2 text-sm md:text-base">
        {title}
      </span>
    </div>
  );
};

export default RoomsItem;
