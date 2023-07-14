import Image from "next/image";
import img1 from "@/public/grey-archi-1.jpg";
import img2 from "@/public/grey-archi-2.jpg";
import img3 from "@/public/grey-archi-3.jpg";
import img4 from "@/public/grey-archi-4.jpg";
import { useState } from "react";
import { setServers } from "dns";

export default function Hero() {
  const [showText, setShowText] = useState(true);
  //@ts-ignore
  const showOrHideText = () => {
    setShowText(!showText);
  };
  const [items, setItems] = useState(["Added items will appear here!"]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("input: ", input);
    setItems([...items, input]);
    console.log(items);
  };

  const handleDelete = (index: number) => {
    const arr = [...items];
    console.log("before splicing: ", arr);
    arr.splice(index, 1);
    console.log("after splicing: ", arr);
    setItems(arr);
    console.log("items: ", items);
  };

  const [input, setInput] = useState("");
  const handleInputChange = (event: any) => {
    event.preventDefault();
    setInput(event.target.value);
  };

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
                height={0}
              />
            </div>
            <div className="rounded-2xl w-[400px] h-[220px] bg-[#656565] overflow-hidden flex ic relative">
              <Image
                className="hover:scale-110 duration-200 cursor-pointer absolute -top-20"
                src={img2}
                alt=""
                width={400}
                height={0}
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
                height={0}
              />
            </div>
            <div className="rounded-2xl w-[400px] h-[220px] bg-[#656565] overflow-hidden flex ic relative">
              <Image
                className="hover:scale-110 duration-200 cursor-pointer absolute -top-2 min-w-[400px] min-h-[220px] "
                src={img4}
                alt=""
                width={0}
                height={0}
              />
            </div>
          </div>
        </div>
      </div>
      <section className="min-h-[200px] p-20 w-full bg-slate-900">
        <div className="flex justify-evenly ic ">
          <button
            onClick={showOrHideText}
            className="px-8 pt-2 py-3 text-3xl hover:bg-y duration-150 hover:scale-110 bg-g rounded-xl "
          >
            magic
          </button>
          <p
            className={
              showText ? " text-white text-2xl" : "hidden text-white text-2xl"
            }
          >
            About as magic as you dad mate
            <br /> and he disseappeared didnt he
          </p>
        </div>
      </section>

      <section className="min-h-[900px] relative flex jc p-20 w-full">
        <form
          onSubmit={handleSubmit}
          className="w-[100%] flex-col absolute justify-around flex gap-6 ic jc"
        >
          <h1 className="font-extrabold text-2xl italic underline">
            To-do List:
          </h1>
          <div className="w-[100%] flex-row flex gap-6 ic jc ">
            <label htmlFor="">Add item:</label>
            <input
              value={input}
              onChange={handleInputChange}
              type="text"
              className="w-[70%] h-[50px] rounded-xl p-4 duration-200 focus:text-black text-gray-600 focus:drop-shadow-2xl focus:outline-none"
            />
            <button
              className="px-4 py-2 hover:font-extrabold hover:bg-y duration-150 hover:scale-110 bg-g rounded-xl "
              type="submit"
            >
              Add
            </button>
          </div>
          <div className="flex-col">
            <ul className="max-h-[250px] overflow-y-scroll sidebar ">
              {
                //@ts-ignore
                items.map((item, index) => (
                  <div key={index} className="flex">
                    <li
                      key={index}
                      className="min-w-[350px] bg-gray-200 m-2 rounded-md py-2 px-6 flex jc ic"
                    >
                      {item}
                    </li>
                    <button
                      onClick={(e: any) => {
                        e.preventDefault();
                        handleDelete(index);
                      }}
                      type="button"
                      className="px-2 m-2 bg-red-300 duration-200 hover:text-white hover:bg-red-500 rounded-xl"
                    >

                      delete task
                    </button>
                  </div>
                ))
              }
            </ul>
          </div>
        </form>
      </section>

      <section className="border-t-4 border-black min-h-[400px] w-full p-10">
        footer
      </section>
    </>
  );
}
