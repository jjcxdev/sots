import Link from "next/link";

export default function Splash() {
  return (
    <div className="bg-transparent py-10 mx-24">
      <div className="relative z-50">
        <h1
          id="home-heading"
          className="uppercase text-6xl mt-10 font-extrabold">
          Seminar on the Seas
        </h1>
        <div className="uppercase text-5xl font-extrabold">
          Welcome to a new style of training
        </div>
        <div className="py-2 text-4xl font-extrabold text-[#43C6FE]">
          April 13 - 20, 2025
        </div>
        <div className="container text-center flex flex-row flex-wrap font-extrabold text-xl py-2 whitespace-normal uppercase">
          <span className="item whitespace-nowrap">Miami</span>
          <span className="item whitespace-nowrap">Cococay</span>
          <span className="item whitespace-nowrap">Charlotte Amalie</span>
          <span className="whitespace-nowrap">Philipsburg</span>
        </div>

        <div className="py-2 uppercase text-lg font-extrabold text-[#D7A770]">
          Sailing on Royal Caribbean&apos;s Symphony of the Seas
        </div>
        <div>
          <Link
            href="https://www.royalcaribbean.com/cruise-ships/symphony-of-the-seas"
            aria-label="Royal Caribbean's Symphony of the Seas">
            <button className="bg-white uppercase text-lg font-bold text-neutral-900 px-8 py-3 my-10">
              Come Aboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
