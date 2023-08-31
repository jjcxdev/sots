import PageHeader from "./components/pageheader";
import Trainer from "./components/trainer";
import Image from "next/image";
import Link from "next/link";
import Splash from "./components/splash";

export default function Header() {
  return (
    <div role="main" aria-labelledby="home-heading">
      <Splash
        title="Seminar on the Seas"
        imageSrc="/img5.webp"
        alt="symphony on the seas"
        date="04.13.2025 - 04.20.2025"
        location="Miami Cococay Charlotte Amalie Philpsburg"
        id="seminar"
      />
      <div className="p-4 bg-white">
        <div className="bg-white text-neutral-600">Hi</div>
      </div>
      <div className="p-4 text-center text-2xl font-bold">Trainer</div>
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
      <p className="bg-white text-neutral-600 p-4">
        Anthony Grimani is a highly respected expert in home theater acoustics
        and design. He was named one of the “50 Most Vital Influencers” by
        CustomRetailer magazine and inducted as Fellow of the CEDIA trade
        association. In 2013, CEPro Magazine named him one of the “Top 20 Most
        Influential People of the Past 20 Years.”
        <br />
        <br /> His more than 25 years of industry experience include executive
        positions at{" "}
        <Link
          className="text-custom-blue font-bold"
          href="https://www.dolby.com/"
        >
          Dolby
        </Link>{" "}
        and{" "}
        <Link
          className="text-custom-blue font-bold"
          href="https://www.thx.com/"
        >
          {" "}
          Lucasfilm THX.
        </Link>
        <br />
        <br />
        At Dolby, Anthony was intricately involved in the development of
        surround sound for consumer applications. During his nine-year tenure at
        THX, he managed the THX consumer licensing program and the technology
        development program, setting the direction for consumer and professional
        Audio/Video businesses.
        <br />
        <br />
        Anthony developed the Home THX program, the THX PM3 program, and
        invented the revolutionary Surround EX 6.1 channel audio format
        pioneered in Star Wars, the Phantom Menace.
        <br />
        <br />
        He&#39;s a frequent lecturer at industry conferences such as{" "}
        <Link className="text-custom-blue font-bold" href="https://aes2.org/">
          AES
        </Link>{" "}
        and{" "}
        <Link className="text-custom-blue font-bold" href="https://cedia.net/">
          CEDIA
        </Link>{" "}
        and earned the CEDIA Top Instructor award.
        <br />
        <br />
        Anthony holds six patents in the area of audio and acoustics. He
        received his bachelor&#39;s degree in Electrical Engineering from the
        University of California at Davis.
        <br />
        <br />
        He&#39;s been passionate about music and technology since he was a young
        man. He studied at the Music Conservatory in Paris and tinkered with
        gear lying around his father&#39;s amateur audio workshop.
        <br />
        <br />
        Born in Asia and raised in Europe, Anthony speaks four languages
        fluently. He resides in Marin County with his wife.
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
