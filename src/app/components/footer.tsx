import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col py-10 items-center justify-center flex-wrap">
        <div className="flex items-center flex-shrink-0 text-white">
          <Image
            src="/logo.png"
            width="72"
            height="72"
            className=""
            alt="Seminar On The Seas Logo"
          />
        </div>
        <div className="flex flex-col text-center">
          <div className="text-base">
            Automated Home Technologies
            <br />
            Seminar on the Seas
            <br />
            info@seminarontheseas.com
            <br />
            U.S. & CANADA: 416.896.2495
          </div>
          <div className="text-2xs">
            <br />* Pricing valid until April 18/24. Complimentary rooms based
            upon 150 cabins being sold. Rooms/pricing may change after this
            date.
            <br />* Based on double occupancy. Airfare, hotel (if required) not
            included (prices subject to change from cruise line)
            <br /> ** Does not include any drinks above $12 or specialty dining.
          </div>
        </div>
      </div>
    </>
  );
}
