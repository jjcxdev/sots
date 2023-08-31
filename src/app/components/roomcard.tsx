import Image from "next/image";

type RoomCardProps = {
  title: string;
  imageSrc: string;
  price: number;
  earlybird: number;
  blurb: string;
  id: string;
};

export const RoomCard: React.FC<RoomCardProps> = ({
  title,
  imageSrc,
  price,
  earlybird,
  blurb,
  id,
}) => {
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
              <div className="p-4">{blurb}</div>

              <div className="w-full flex flex-col"></div>
              <div
                className="pt-4 bg-[#20446E] items-center text-white text-4xl text-center font-extrabold"
                style={{
                  textDecoration: "line-through",
                  textDecorationColor: "red",
                }}
              >
                ${price.toLocaleString()}
              </div>

              <div className="pb-4 bg-[#20446E] items-center text-yellow-400 text-2xl text-center font-extrabold">
                ${earlybird.toLocaleString()}
                <p className="text-base">
                  Early bird discount untl August 31, 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
