type CardProps = {
  title: string;
  children: React.ReactNode;
  id: string;
};

function Card({ title, children }: CardProps) {
  return (
    <div className="w-full m-auto max-w-4xl flex rounded-md flex-col justify-center">
      <div className="bg-custom-blue p-4 uppercase font-extrabold lg:text-3xl text-xl border border-custom-blue">
        {title}
      </div>
      <div className="border p-4 lg:text-2xl text-neutral-600 text-base border-custom-blue">
        {children}
      </div>
    </div>
  );
}

export default Card;
