import PageHeader from "../components/pageheader";

export default function Course() {
  return (
    <div role="main" aria-labelledby="course-heading">
      <PageHeader
        title="Experience"
        imageSrc="/img3.png"
        alt="Stage inside the ship"
        id="course-heading"
      />
      <div className="bg-white text-custom-blue">Course</div>
    </div>
  );
}
