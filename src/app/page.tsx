import Trainer from "./components/trainer";
import Image from "next/image";
import Link from "next/link";
import Splash from "./components/splash";
import Info from "./components/info";

export default function Header() {
  return (
    <div role="main" aria-labelledby="home-heading">
      <div className="hidden">
        <Splash
          title="Seminar on the Seas"
          imageSrc="/img5.webp"
          alt="symphony on the seas"
          date="04.13.2025 - 04.20.2025"
          location="Miami Cococay Charlotte Amalie Philpsburg"
          id="seminar"
        />
      </div>
      <div className="p-4 my-24 text-center bg-custom-blue-dark">
        <h1 className="uppercase text-3xl mt-10 font-extrabold">
          Seminar on the Seas
        </h1>
        <div className="uppercase text-2xl font-extrabold">
          Welcome to a new style of training
        </div>
        <div className="py-2 text-3xl font-extrabold text-accent-blue">
          04.13.2025 - 04.20.2025
        </div>
        <div className="container text-center flex flex-row justify-center flex-wrap font-extrabold text-xl py-2 whitespace-normal uppercase">
          <span className="item whitespace-nowrap">Miami</span>
          <span className="item whitespace-nowrap">Cococay</span>
          <span className="item whitespace-nowrap">Charlotte Amalie</span>
          <span className="whitespace-nowrap">Philipsburg</span>
        </div>

        <div className="py-2 uppercase text-lg font-extrabold text-custom-gold">
          Sailing on Royal Caribbean's Symphony of the Seas
        </div>
        <div>
          <Link href="https://www.royalcaribbean.com/cruise-ships/symphony-of-the-seas">
            <button className="bg-white uppercase text-lg font-bold text-neutral-900 px-8 py-3 m-10">
              Come Aboard
            </button>
          </Link>
        </div>
      </div>
      <div>
        <Info />
      </div>
      <h2 className="pt-2 uppercase text-center bg-white text-custom-gold text-3xl font-bold">
        VIP Keynote Speaker & Instructor
      </h2>
      <div className="pb-2 uppercase text-center bg-white text-custom-blue-dark text-2xl font-bold">
        Anthony Grimani
      </div>
      <div
        className="relative rounded-t-md overflow-hidden w-full"
        style={{ height: "325px" }}
      >
        <Image
          src="/anthony.webp"
          alt="anthony grimani"
          layout="fill"
          objectFit="cover"
          className="absolute rounded-t-md"
        />
      </div>
      <p className="bg-white text-neutral-600 p-4 pb-12">
        Anthony Grimani is a highly respected expert in home theatre acoustics
        and design. He was named one of the “50 Most Vital Influencers” by
        CustomRetailer magazine and inducted as Fellow of the CEDIA trade
        association. In 2013, CEPro Magazine named him one of the “Top 20 Most
        Influential People of the Past 20 Years.” He’s a frequent lecturer at
        industry conferences such as{" "}
        <Link className="text-custom-blue font-bold" href="https://aes2.org/">
          AES
        </Link>{" "}
        and{" "}
        <Link className="text-custom-blue font-bold" href="https://cedia.net/">
          CEDIA
        </Link>{" "}
        and earned the CEDIA Top Instructor award.
      </p>
      <div className="hidden" role="main" aria-labelledby="anthony-grimani">
        <Trainer
          title="Anthony Grimani is a highly respected expert in home theater acoustics and design. He was named one of the “50 Most Vital Influencers” by CustomRetailer magazine and inducted as Fellow of the CEDIA trade association. In 2013, CEPro Magazine named him one of the “Top 20 Most Influential People of the Past 20 Years.”
          His more than 25 years of industry experience include executive positions at Dolby and Lucasfilm THX.
          At Dolby, Anthony was intricately involved in the development of surround sound for consumer applications. During his nine-year tenure at THX, he managed the THX consumer licensing program and the technology development program, setting the direction for consumer and professional Audio/Video businesses.
          Anthony developed the Home THX program, the THX PM3 program, and invented the revolutionary Surround EX 6.1 channel audio format pioneered in Star Wars, the Phantom Menace.
          He’s a frequent lecturer at industry conferences such as AES (Audio Engineering Society) and CEDIA (Custom Electronics Design and Installation Association) and earned the CEDIA Top Instructor award.
          Anthony holds six patents in the area of audio and acoustics.  He received his bachelor’s degree in Electrical Engineering from the University of California at Davis.
          He’s been passionate about music and technology since he was a young man. He studied at the Music Conservatory in Paris and tinkered with gear lying around his father’s amateur audio workshop.
          Born in Asia and raised in Europe, Anthony speaks four languages fluently. He resides in Marin County with his wife.
          "
          imageSrc="/anthony.webp"
          alt="Anthony Grimani"
          id="anthony-grimani"
        />
      </div>
    </div>
  );
}
