import Image from "next/image";

type RoomCardProps = {
  title: string;
  imageSrc: string;
  price: string;
  children: React.ReactNode;
  id: string;
};

function RoomCard({ title, imageSrc, price, children }: RoomCardProps) {
  return (
    <div className="py-4 bg-white flex-col flex ">
      <div className="md:w-5/6 lg:w-3/4 m-auto mt-4 ">
        <div className="w-full relative " style={{ height: "325px" }}>
          <Image
            src={imageSrc}
            alt={title}
            className="object-cover px-4 w-full h-full"
            fill={true}
          />
        </div>
        <div className="w-full px-4 flex flex-col">
          <div className="mb-4">
            <div className="bg-custom-gold p-4 uppercase font-extrabold text-xl border border-custom-gold">
              {title}
            </div>
            <div className="border text-custom-blue text-base border-custom-gold">
              <div className="p-4">{children}</div>
              <div className="flex justify-between">
                <div className="w-1/2"></div>
                <div className="w-1/2 p-4 bg-custom-blue items-center text-white text-center font-extrabold">
                  {price}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="hidden lg:grid grid-cols-2 w-5/6 m-auto my-4">
        <div className="w-full">
          <div className="w-full relative " style={{ height: "302px" }}>
            <Image
              src={imageSrc}
              alt={title}
              className="object-cover w-full h-full"
              fill={true}
            />
          </div>
        </div>
        <div className="w-full h-60">
          <div className="bg-custom-gold p-4 uppercase font-extrabold text-xl border border-custom-gold overflow-auto">
            {title}
          </div>
          <div className="border h-full text-custom-blue text-base border-custom-gold">
            <div className="p-4">{children}</div>
            <div className="flex justify-between">
              <div className="w-1/2"></div>
              <div className="w-1/2 p-4 bg-custom-blue items-center text-white text-center font-extrabold">
                {price}
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default RoomCard;
