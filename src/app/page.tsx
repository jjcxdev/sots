import PageHeader from "./components/pageheader";
import RootLayout from "./layout";

export default function Header() {
  return (
    <RootLayout>
      <div>
        <PageHeader title="Home" imageSrc="" />
        <div className="bg-white text-custom-blue">Hi</div>
      </div>
    </RootLayout>
  );
}
