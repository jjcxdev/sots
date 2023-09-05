type CardProps = {
  title: string;
  children: React.ReactNode;
  id: string;
};

function Card({ title, children }: CardProps) {
  return (
    <div className="w-full m-auto flex flex-col justify-center">
      <div className="bg-custom-blue p-4 uppercase font-extrabold text-2xl border border-custom-blue">
        {title}
      </div>
      <div className="border p-4 text-neutral-600 text-base border-custom-blue">
        {children}
      </div>
    </div>
  );
}

export default Card;
