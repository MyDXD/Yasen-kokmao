import Image from "next/image";
import { Kanit } from "@next/font/google";
const kanit = Kanit({
  weight: "400",
  subsets: ["thai"],
  display: "swap",
});

export default function Home() {
  return (
    <div className={`${kanit.className}`}>
      <div className={kanit.className + " grid grid-cols-2 gap-2 bg-[#f2f3f4]"}>
        <div className="flex mt-10 justify-center items-center">
          <h3 className="text-center text-2xl  text-[#6c6d70]">
            ยาเส้นโคกเมาของจริงของแท้<br></br>
            ปลูกบ้านโคกเมา ขายโดนคนโคกเมา<br></br>
            ยี่ห้อ
            <span className="text-3xl font-bold	 text-[#81aa89]">
              &nbsp; บังดีนยาเส้นโคกเมา &nbsp;
            </span>
            ชื่อนี้มั่นใจได้ครับ
          </h3>
        </div>
        <div className="mt-10  h-96">
          <Image
            src="/images/all.jpg"
            width={300}
            height={500}
            className="object-fill rounded-3xl  w-80 absolute   translate-y-0" // just an example
          />
        </div>
      </div>
      <div className="grid grid-col-2 m-60 mt-10 ">
        <div className=" justify-start items-start">
          <span className="text-3xl font-bold	 text-[#81aa89] underline underline-offset">
            เกรดของยาเส้น
          </span>
          <p className="mt-5">
            ทางร้านบังดีนยาเส้นโคกเมาของเรามีการคัดเกรดของยาเส้น…
          </p>
        </div>
        <div className=" justify-start items-start mt-10">
          <span className="text-3xl font-bold	 text-[#81aa89]">
            บังดีนยาเส้นโคกเมา
          </span>

          <p>ทางร้านบังดีนยาเส้นโคกเมาของเรามีการคัดเกรดของยาเส้น…</p>
        </div>
      </div>
    </div>
  );
}
