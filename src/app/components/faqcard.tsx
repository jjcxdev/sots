type CardProps = {
  title: string;
  children: React.ReactNode;
};

function Card({ title, children }: CardProps) {
  return (
    <div className="py-6">
      <div className="w-full px-6 flex m-auto flex-col justify-center">
        <div className="bg-custom-gold p-4 uppercase font-extrabold text-xl border border-custom-gold">
          {title}
        </div>
        <div className="border p-4 text-custom-blue text-base border-custom-gold">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Card;
