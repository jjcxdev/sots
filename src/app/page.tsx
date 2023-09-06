import Image from "next/image";
import Link from "next/link";
import Splash from "./components/splash";
import Info from "./components/info";

export default function Header() {
  return (
    <div role="main" aria-labelledby="home-heading">
      <div className="hidden lg:block relative h-full w-full overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
          <Image
            src="/night2.webp"
            alt="Symphony of the Seas ship"
            className="object-cover overflow-hidden"
            layout="fill"
            style={{ left: "20%" }}
            priority
          />
          <div className="relative w-full h-full z-10 diagonal-cut">
            <Image
              src="/waves.jpg"
              alt="background image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <Splash />
      </div>
      <div className="p-8 lg:hidden  relative z-50">
        <h1
          id="home-heading"
          className="uppercase text-4xl mt-10 font-extrabold relative z-50"
        >
          Seminar on the Seas
        </h1>
        <div className="uppercase text-2xl w-5/12 font-extrabold relative  z-50">
          Welcome to a new style of training
        </div>
        <div className="py-2 text-3xl font-extrabold text-[#43C6FE] relative  z-40">
          April 13 - 20, 2025
        </div>
        <div className="container text-center flex flex-row flex-wrap font-extrabold text-lg py-2 whitespace-normal uppercase relative  z-30">
          <span className="item whitespace-nowrap">Miami</span>
          <span className="item whitespace-nowrap">Cococay</span>
          <span className="item whitespace-nowrap">Charlotte Amalie</span>
          <span className="whitespace-nowrap">Philipsburg</span>
        </div>

        <div className="py-2 uppercase text-lg font-extrabold text-[#D7A770] relative  z-20">
          Sailing on Royal Caribbean&apos;s Symphony of the Seas
        </div>
        <div>
          <Link
            href="mailto@info@seminarontheseas.com"
            aria-label="Seminar on the Seas contact"
          >
            <button className="bg-white z-10 uppercase text-lg relative hover:bg-accent-blue hover:text-white font-bold text-neutral-900 px-8 py-3 my-10">
              Come Aboard
            </button>
          </Link>
        </div>

        <Image
          src="/waves.jpg"
          alt="symphony of the seas ship"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div>
      <div className="lg:hidden w-full">
        <Image
          src="/symph.webp"
          alt="Symphony of the Seas ship"
          className="w-full"
          width="500"
          height="100"
        />
      </div>
      <div>
        <Info />
      </div>
    </div>
  );
}
