import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="flex bg-custom-blue-dark flex-col py-10 items-center justify-center flex-wrap">
        <div className="flex items-center flex-shrink-0 text-white ">
          <Image
            src="/sotsLogo.webp"
            width="72"
            height="72"
            className=""
            alt="Seminar On The Seas Logo"
            style={{ width: "auto" }}
          />
        </div>
        <address
          className="flex flex-col text-center font-normal"
          aria-labelledby="contact-details"
        >
          <div id="contact-details" className="text-base pt-4">
            For Bookings or more information, please contact:
            <br />
            <p className="font-extrabold pt-4">Rhonda Hamilton, CTC </p>
            Direct Travel
            <br />
            <div className="flex flex-col">
              <a
                className="text-[#D7A770] hover:text-white"
                href="mailto:rhamilton@dt.com"
              >
                rhamilton@dt.com
              </a>
              <a
                href="tel:1.800.263.5575"
                className="ml-2 hover:text-[#D7A770]"
              >
                1.800.263.5575 ext. 1230
              </a>
            </div>
            <br />
            <p className="font-extrabold pt-4">Blair Robin</p>
            Seminar on the Seas
            <br />
            <div className="flex flex-col">
              <a
                className="text-[#D7A770] hover:text-white"
                href="mailto:info@seminarontheseas.com"
              >
                info@seminarontheseas.com
              </a>
              <a
                href="tel:416.896.2495"
                className="ml-2 pb-2 hover:text-[#D7A770]"
              >
                416.896.2495
              </a>
            </div>
          </div>
        </address>
      </footer>
    </>
  );
}
