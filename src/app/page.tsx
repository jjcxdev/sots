import Trainer from "./components/trainer";
import Image from "next/image";
import Link from "next/link";
import Splash from "./components/splash";
import Info from "./components/info";
import Keynote from "./components/keynote";

export default function Header() {
  return (
    <div role="main" aria-labelledby="home-heading">
      <div className="hidden lg:block relative h-full w-full">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Image
            src="/img3.webp"
            alt="symphony of the seas ship"
            className="object-cover"
            layout="fill"
            priority
          />
          <div className="relative w-full h-full z-10 diagonal-cut">
            <Image
              src="/waves.jpg"
              alt="symphony of the seas ship"
              layout="fill"
              objectFit="cover"
              // className="z-0"
            />
          </div>
        </div>
        <Splash />
      </div>
      <div className="p-8 lg:hidden  relative z-50">
        <h1
          id="home-heading"
          className="uppercase text-4xl mt-10 font-extrabold relative z-50">
          Seminar on the Seas
        </h1>
        <div className="uppercase text-2xl font-extrabold relative  z-50">
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
            href="https://www.royalcaribbean.com/cruise-ships/symphony-of-the-seas"
            aria-label="Royal Caribbean's Symphony of the Seas">
            <button className="bg-white z-10 uppercase text-lg relative  font-bold text-neutral-900 px-8 py-3 my-10">
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

      <div>
        <Info />
      </div>
      <div className="hidden lg:block relative h-full w-full">
        <div className="absolute top-0 left-0 w-full h-full z-1">
          <div className="">
            <Image
              src="/anthony.webp"
              alt="symphony of the seas ship"
              className="object-cover"
              layout="fill"
              priority
              style={{ left: "30%" }}
            />
          </div>
          <div className="relative w-full h-full bg-white z-10 diagonal-cut-2"></div>
        </div>
        <Keynote />
      </div>

      <div className="lg:hidden">
        <h2 className="pt-2 px-4 uppercase text-center bg-white text-custom-gold text-3xl font-bold">
          VIP Keynote Speaker & Instructor
        </h2>
        <div className="pb-2 uppercase text-center bg-white text-custom-blue-dark text-2xl font-bold">
          Anthony Grimani
        </div>
        <div
          className="relative overflow-hidden w-full"
          style={{ height: "325px" }}>
          <Image
            src="/anthony.webp"
            alt="anthony grimani"
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
        </div>
        <p className="bg-white text-neutral-600 p-4 py-10 md:p-10">
          Anthony Grimani is a highly respected expert in home theatre acoustics
          and design. He was named one of the “50 Most Vital Influencers” by
          CustomRetailer magazine and inducted as Fellow of the CEDIA trade
          association. In 2013, CEPro Magazine named him one of the “Top 20 Most
          Influential People of the Past 20 Years.” He&apos;s a frequent
          lecturer at industry conferences such as{" "}
          <Link
            className="text-custom-gold uppercase font-bold hover:underline hover:text-custom-gold"
            href="https://aes2.org/">
            AES
          </Link>{" "}
          and{" "}
          <Link
            className="text-custom-gold uppercase font-bold hover:underline hover:text-custom-gold"
            href="https://cedia.net/">
            CEDIA
          </Link>{" "}
          and earned the CEDIA Top Instructor award.
        </p>
      </div>
    </div>
  );
}
