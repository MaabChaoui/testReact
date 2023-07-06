import Image from "next/image";
import img1 from "@/public/grey-archi-1.jpg";
import img2 from "@/public/grey-archi-2.jpg";
import img3 from "@/public/grey-archi-3.jpg";
import img4 from "@/public/grey-archi-4.jpg";

export default function Hero() {
  return (
    <>
      <div className=" w-full bg-ccc p-10 flex text-2xl justify-evenly">
        <div className="p-6 min-h-[420] bg-gray-100 rounded-2xl m-6">
          <h1 className="font-extrabold pb-4 ">hello</h1>
          <p className="text-xl font-thin italic">
            This is a test. This is a test. This is a test.This is a test. This
            is a test.
          </p>
        </div>
        <div className="flex gap-2 flex-row m-6">
          <div className="flex gap-2 flex-col">
            <div className="rounded-2xl w-[400px] h-[220px] bg-[#656565] overflow-hidden flex ic relative">
              <Image
                className="hover:scale-110 duration-200 cursor-pointerhover:scale-110 duration-200 cursor-pointer absolute -top-20"
                src={img1}
                alt=""
                width={400}
                height={""}
              />
            </div>
            <div className="rounded-2xl w-[400px] h-[220px] bg-[#656565] overflow-hidden flex ic relative">
              <Image
                className="hover:scale-110 duration-200 cursor-pointer absolute -top-20"
                src={img2}
                alt=""
                width={400}
                height={""}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="rounded-2xl w-[400px] h-[220px] bg-[#656565] overflow-hidden flex ic relative">
              <Image
                className="hover:scale-110 duration-200 cursor-pointer absolute -top-0"
                src={img3}
                alt=""
                width={400}
                height={""}
              />
            </div>
            <div className="rounded-2xl w-[400px] h-[220px] bg-[#656565] overflow-hidden flex ic relative">
              <Image
                className="hover:scale-110 duration-200 cursor-pointer absolute -top-2 min-w-[400px] min-h-[220px] "
                src={img4}
                alt=""
                width={""}
                height={""}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
