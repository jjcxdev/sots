import Link from "next/link";

export default function Keynote() {
  return (
    <div className="bg-transparent py-36 mx-24">
      <div className="relative z-50">
        <div className="w-5/12">
          <h2
            id="home-heading"
            className="uppercase text-5xl mt-10 font-bold text-custom-gold">
            VIP Keynote Speaker & Instructor
          </h2>
        </div>
        <div className="uppercase text-5xl text-custom-blue-dark font-extrabold py-6">
          Anthony Grimani
        </div>
        <div className="py-2 text-2xl w-7/12  text-neutral-600">
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
        </div>
      </div>
    </div>
  );
}
