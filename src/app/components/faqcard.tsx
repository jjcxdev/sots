type CardProps = {
  title: string;
  children: React.ReactNode;
  id: string;
};

function Card({ title, children }: CardProps) {
  return (
    <div className="w-full md:w-3/4 px-6 py-6 flex m-auto rounded-md flex-col justify-center">
      <div className="bg-custom-blue p-4 rounded-t-md uppercase font-extrabold text-xl border border-custom-blue">
        {title}
      </div>
      <div className="border p-4 text-neutral-600 rounded-b-md text-base border-custom-blue">
        {children}
      </div>
    </div>
  );
}

export default Card;
