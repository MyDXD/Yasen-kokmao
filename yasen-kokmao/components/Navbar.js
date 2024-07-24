import "./Navbar";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center p-4 border-2 border-gray-700">
      <Link href="/" className="mx-4 hover:underline">
        หน้าหลัก
      </Link>
      <Link href="/" className="mx-4 hover:underline">
        สินค้าทั้งหมด
      </Link>
      <Link href="/" className="mx-4 hover:underline">
        บทความ
      </Link>
      <Link href="/" className="mx-4 hover:underline">
        ติดต่อเรา
      </Link>
      <Link href="/" className="mx-4 hover:underline">
        เวลา
      </Link>
      <Link href="/" className="mx-4 hover:underline">
        เบอร์โทร
      </Link>
    </nav>
  );
};

export default Navbar;
