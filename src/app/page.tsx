import PageHeader from "./components/pageheader";

export default function Header() {
  return (
    <div role="main" aria-labelledby="home-heading">
      <PageHeader
        title="Home"
        imageSrc="/img2.webp"
        alt="sunset on the ocean"
        id="home-heading"
      />
      <div className="bg-white text-custom-blue">Hi</div>
    </div>
  );
}
