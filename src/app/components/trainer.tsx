import Image from "next/image";

type TrainerProps = {
  title: string;
  imageSrc: string;
  alt: string;
  id: string;
};

const Trainer: React.FC<TrainerProps> = ({ title, imageSrc }) => {
  return (
    <div className="relative h-fit w-full">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src={imageSrc}
          alt={title}
          className="object-cover"
          fill={true}
          priority
        />
      </div>
      <div className=" w-3/5 h-full bg-accent-blue text-white flex items-end z-10 diagonal-cut">
        <h1 className="text-container pl-6 py-4 lg:text-6xl w-full bg-accent-blue ">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Trainer;
