import Trainer from "./components/trainer";
import Image from "next/image";
import Link from "next/link";
import Splash from "./components/splash";
import Info from "./components/info";
import Keynote from "./components/keynote";

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
              // className="z-0"
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
            href="https://www.royalcaribbean.com/cruise-ships/symphony-of-the-seas"
            aria-label="Royal Caribbean's Symphony of the Seas"
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
      <div className="px-24 pb-24 hidden lg:block ">
        <div className="relative m-auto h-full overflow-hidden w-full">
          <div className="absolute top-0 left-0 w-full h-full z-1 overflow-hidden">
            <div className="">
              <Image
                src="/anthony.webp"
                alt="anthony grimani"
                className="object-contain overflow-hidden"
                layout="fill"
                objectPosition="center 30%"
                priority
                style={{ left: "25%" }}
              />
            </div>
            <div className="relative w-full h-full bg-white z-10 diagonal-cut-2 "></div>
          </div>
          <Keynote />
        </div>
      </div>

      <div className="lg:hidden py-12 lg:py-24 px-4 md:px-10 gap-8 lg:px-24">
        <div className="">
          <h2 className="pt-2 uppercase bg-white text-custom-gold text-2xl font-bold">
            VIP Keynote Speaker & Instructor
          </h2>
          <div className="pb-2 uppercase bg-white text-custom-blue-dark text-2xl font-bold">
            Anthony Grimani
          </div>
        </div>
        <div
          className="relative overflow-hidden w-full"
          style={{ height: "500px" }}
        >
          <Image
            src="/anthony.webp"
            alt="anthony grimani"
            layout="fill"
            objectFit="cover"
            className="absolute pb-2 overflow-hidden"
            objectPosition="center 40%"
          />
        </div>
        <div className="bg-white text-neutral-600 pb-2">
          Anthony Grimani is a highly respected expert in home theater acoustics
          and design. He was named one of the “50 Most Vital Influencers” by
          CustomRetailer magazine and inducted as Fellow of the CEDIA trade
          association. In 2013, CEPro Magazine named him one of the “Top 20 Most
          Influential People of the Past 20 Years.”
          <br />
          <br />
          His more than 25 years of industry experience include executive
          positions at Dolby and Lucasfilm THX.
          <br />
          <br />
          At Dolby, Anthony was intricately involved in the development of
          surround sound for consumer applications. During his nine-year tenure
          at THX, he managed the THX consumer licensing program and the
          technology development program, setting the direction for consumer and
          professional Audio/Video businesses.
          <br />
          <br />
          Anthony developed the Home THX program, the THX PM3 program, and
          invented the revolutionary Surround EX 6.1 channel audio format
          pioneered in Star Wars, the Phantom Menace.
          <br />
          <br />
          He&apos;s a frequent lecturer at industry conferences such as AES
          (Audio Engineering Society) and CEDIA (Custom Electronics Design and
          Installation Association) and earned the CEDIA Top Instructor award.
          <br />
          <br />
          Anthony holds six patents in the area of audio and acoustics. He
          received his bachelor&apos;s degree in Electrical Engineering from the
          University of California at Davis.
          <br />
          <br />
          He&apos;s been passionate about music and technology since he was a
          young man. He studied at the Music Conservatory in Paris and tinkered
          with gear lying around his father&apos;s amateur audio workshop.
          <br />
          <br />
          Born in Asia and raised in Europe, Anthony speaks four languages
          fluently. He resides in Marin County with his wife.
        </div>
      </div>
    </div>
  );
}
