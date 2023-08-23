import Image from "next/image";

type RoomCardProps = {
  title: string;
  imageSrc: string;
  price: string;
  children: React.ReactNode;
};

function RoomCard({ title, imageSrc, price, children }: RoomCardProps) {
  return (
    <div className="py-4 bg-white flex-col flex">
      <div className="">
        <Image
          src={imageSrc}
          alt={title}
          className="object-fill px-4"
          width="641"
          height="427"
        />
      </div>
      <div className="w-full px-4 flex flex-col">
        <div className="mb-4">
          <div className="bg-custom-gold p-4 uppercase font-extrabold text-xl border border-custombg-custom-gold">
            {title}
          </div>
          <div className="border text-custom-blue text-base border-custombg-custom-gold">
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
  );
}

export default RoomCard;
