export default function Footer() {
  return (
    <footer className="bg-[#583101] border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-16 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left - Hotel Info */}
        <div>
          <h2 className="font-bold text-2xl text-[#ffedd8]">Diamond Luxury</h2>
          <p className="text-[#ffedd8] mt-3 max-w-sm">
            Experience comfort and elegance in the heart of Bali. Your perfect
            stay awaits at Diamond Luxury Hotel.
          </p>
          <p className="mt-4 text-[#ffedd8] text-sm">
            © {new Date().getFullYear()} Diamond Luxury Hotel. All rights
            reserved.
          </p>
        </div>

        {/* Right - Contact Info */}
        <div className="flex flex-col items-start md:items-end space-y-3">
          <h3 className="font-semibold text-lg text-[#ffedd8]">Contact Us</h3>
          <p className="text-[#ffedd8]">📍 Jl. Sunset Road No. 123, Bali</p>
          <p className="text-[#ffedd8]">📞 +62 812-3456-7890</p>
          <p className="text-[#ffedd8]">✉️ info@diamondluxury.com</p>

          {/* Social Media */}
          <div className="flex gap-4 mt-3">
            <a
              href="#"
              className="text-[#ffedd8] hover:text-[#583101] transition"
              aria-label="Facebook"
            >
              🌐
            </a>
            <a
              href="#"
              className="text-[#ffedd8] hover:text-[#583101] transition"
              aria-label="Instagram"
            >
              📸
            </a>
            <a
              href="#"
              className="text-[#ffedd8] hover:text-[#583101] transition"
              aria-label="Twitter"
            >
              🐦
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
