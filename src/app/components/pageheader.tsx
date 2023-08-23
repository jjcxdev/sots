import Image from "next/image";

type PageHeaderProps = {
  title: string;
  imageSrc: string;
};

const PageHeader: React.FC<PageHeaderProps> = ({ title, imageSrc }) => {
  return (
    <div className="relative h-64 w-full">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src={imageSrc}
          alt={title}
          className="object-cover"
          fill={true}
        />
      </div>
      <div className=" w-3/5 h-full bg-custom-blue text-white flex items-end z-10 diagonal-cut">
        <div className="text-container font-extrabold pl-6 pb-4 text-4xl lg:text-6xl w-full bg-custom-blue ">
          {title}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;