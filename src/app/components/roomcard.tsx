import Image from "next/image";

type RoomCardProps = {
  title: string;
  imageSrc: string;
  price: number;
  earlybird: number;
  blurb: string;
  id: string;
  alt: string;
};

export const RoomCard: React.FC<RoomCardProps> = ({
  title,
  imageSrc,
  price,
  earlybird,
  blurb,
  id,
  alt,
}) => {
  return (
    <div className="py-6 bg-white flex-col flex">
      <div className="md:mx-10 lg:mx-24 m-auto mt-4 w-full ">
        <div
          className="relative  overflow-hidden w-full"
          style={{ height: "325px" }}>
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="absolute "
          />
        </div>
        <div className="w-full flex flex-col">
          {" "}
          {/* Added px-4 here */}
          <div className="mb-4 ">
            <div className="bg-accent-blue p-4 uppercase font-extrabold text-xl border border-custom-blue">
              {title}
            </div>
            <div className="border  text-neutral-600 text-base border-custom-blue">
              <div className="p-4">{blurb}</div>

              <div className="w-full flex flex-col"></div>
              <div
                className="pt-4 bg-custom-blue-dark items-center text-white text-4xl text-center font-extrabold"
                style={{
                  textDecoration: "line-through",
                  textDecorationColor: "red",
                }}>
                ${price.toLocaleString()}
              </div>

              <div className="pb-4 bg-custom-blue-dark items-center text-yellow-400 text-2xl text-center font-extrabold">
                ${earlybird.toLocaleString()}
                <p className="text-base">
                  Early bird discount until August 31, 2024
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
