import PageHeader from "./components/pageheader";

export default function Header() {
  return (
    <div role="main" aria-labelledby="home-heading">
      <PageHeader title="Home" imageSrc="" alt="" id="home-heading" />
      <div className="bg-white text-custom-blue">Hi</div>
    </div>
  );
}
