import PageHeader from "../components/pageheader";

export default function Course() {
  return (
    <div role="main" aria-labelledby="course-heading">
      <PageHeader
        title="Courses"
        imageSrc="/img3.webp"
        alt="Stage inside the ship"
        id="course-heading"
      />
      <div className="bg-white px-4 py-12 text-custom-blue">
        <div className="pb-12">
          <h1 className="font-bold text-2xl pb-2">
            Seminar on the Seas Custom Integrator Training
          </h1>
          <p className="text-sm">
            Choose from 36 hours of advanced courses over the three days the
            ship is at sea on the cruise. “Seminar on the Seas” is a key
            educational and networking event designed to inform and connect with
            some of the top instructors and manufacturers in the industry.
            <br />
            <br />
            The “Seminar on the Seas” cruise is designed to provide advanced
            training in business, marketing and managing your business to become
            more profitable and efficient. Also, this cruise offers a chance to
            network with some the industry&#39;s top instructors, integrators
            and manufacturers. This cruise is designed to deliver crucial
            industry knowledge and connections. Choose from multiple classes
            over the three days of training.
          </p>
        </div>

        <div className="pb-12">
          <div className="font-bold text-2xl pb-2"> Planned Topics</div>
          <ul className="custom-list text-sm ml-4">
            <li className="pb-2">
              Real live challenges of selecting the right equipment for the
              application.
            </li>
            <li className="pb-2">
              Flat panel, projector, LED walls. When and how to use them.
            </li>
            <li>
              Standards and certifications A/V for residential and commercial.
            </li>
            <li className="pb-2">
              Automation, new and amazing ways to apply automation to your
              projects.
            </li>
            <li className="pb-2">
              Proper design of motorized shades for energy and lighting
              management.
            </li>
            <li className="pb-2">
              Where are we heading? A look down the CE path.{" "}
            </li>
            <li className="pb-2">
              Lighting. Why it&#39;s so important. How to use tunable and other
              LED lights.
            </li>
            <li className="pb-2">
              Social Marketing, what is it and how to take advantage of it.
            </li>
            <li className="pb-2">
              Lessons on real world networking needs for today&#39;s integration
              of electronic systems.
            </li>
            <li className="pb-2">
              Get it done right! Learn how to correctly use your distributors to
              increase your profits.
            </li>
            <li className="pb-2">
              Advertising, when and how to use it effectively. How to use
              competitions to your advantage.
            </li>
            <li className="pb-2">
              Ask the Experts. Q &A panel discussion on any CI matters.
            </li>
          </ul>
        </div>

        <div className="">
          <div className="font-bold text-2xl pb-2">Other Highlights</div>
          <ul className="custom-list text-sm">
            <li className="pb-2">
              Welcome reception in the evening after departing Tampa.
            </li>
            <li className="pb-2">
              Behind the scenes tour of the A/V, automation equip for
              entertainment areas of the ship.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
