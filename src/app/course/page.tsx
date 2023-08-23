import RootLayout from "../layout";
import PageHeader from "../components/pageheader";

export default function Course() {
  return (
    <RootLayout>
      <div>
        <PageHeader title="Experience" imageSrc="/img3.png" />
        <div className="bg-white text-custom-blue">Course</div>
      </div>
    </RootLayout>
  );
}
