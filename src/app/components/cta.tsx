export default function Call() {
  return (
    <>
      <div className="font-nunito bg-custom-blue">
        <div
          className="hidden sm:flex sm:items-center sm:pl-36 h-10 w-full text-xs"
          role="region"
          aria-label="Contact Information">
          U.S. & CANADA:{" "}
          <a
            href="tel:416.896.2495"
            className="ml-2"
            aria-label="Call U.S. & Canada at 416.896.2495">
            416.896.2495
          </a>
        </div>
      </div>
    </>
  );
}
