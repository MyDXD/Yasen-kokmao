import "./Navbar";
import Link from "next/link";
import { Kanit } from "@next/font/google";
import Image from "next/image";

const kanit = Kanit({
  weight: "400",
  subsets: ["thai"],
  display: "swap",
});

const Navbar = () => {
  return (
    <div className={`${kanit.className} `}>
      <div className="flex flex-col justify-center  items-center m-10">
        <Image
          src="/images/logo.jpg"
          width={150}
          height={150}
          className="content-center	rounded-full"
        />
        <p className="mt-5 text-lg text-gray-600">บังดีนยาเส้นโคกเมา</p>
      </div>

      <nav
        className={`flex justify-center items-center p-7 border-2 border-gray-700 bg-[#ffffff]`}
      >
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
    </div>
  );
};

export default Navbar;
